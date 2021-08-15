import React from 'react';
import { useHistory } from 'react-router';
import './button.css';

export const Button = ({ handleClickShadow, shadow }) => {
    return (
        <div>
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

export const BackButton = ({ shadow, name }) => {
    const history = useHistory()
    const handleClick = () => {
        history.goBack();
    }

    return (
        <div>
            <button 
                type='button' 
                onClick={handleClick}
                className={shadow ? 'button shadowButton' : 'button lightButton'}
            >
                {name}
            </button>
        </div>
    )
};

export const BackMainPage = ({ shadow, name }) => {
    const history = useHistory()
    const handleClick = () => {
        history.push("/");
    }

    return (
        <div>
            <button 
                type='button' 
                onClick={handleClick}
                className={shadow ? 'button shadowButton' : 'button lightButton'}
            >
                {name}
            </button>
        </div>
    )
};
