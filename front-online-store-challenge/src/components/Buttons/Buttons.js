import React from 'react';
import './button.css';

const Button = ({ handleClickShadow, shadow }) => {
    return (
        <div className="buttonsBox">
            <button 
                type='button' 
                onClick={handleClickShadow}
                className={shadow ? 'button shadowButton' : 'button lightButton'}
            >
                {shadow ? 'light' : 'shadow'}
            </button>
        </div>
    )
};

export default Button;
