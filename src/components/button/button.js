import React from 'react';
import './button.scss';

const Button = ({click_handler, modifier, className, text}) => {
    return (
        <button onClick={()=>{click_handler();}} className={`a-button${modifier ? modifier :""} ${className}`}>{text}</button>
    )
}

export default Button;
