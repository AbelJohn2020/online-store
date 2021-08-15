import React from 'react'

const Button = ({ handleClickShadow, shadow }) => {
    return (
        <div className="buttonsBox">
            <button 
                type='button' 
                onClick={handleClickShadow}
                className={shadow ? 'button shadowButton' : 'button lightButton'}
            >
                {shadow ? 'claro' : 'oscuro'}
            </button>
        </div>
    )
};

export default Button;
