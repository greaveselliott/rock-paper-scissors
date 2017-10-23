import React from 'react';
import './button.scss';

const Button = props => {
    return (
        <button onClick={()=>{props.click_handler();}} className={props.modifier ? `a-button${props.modifier}` : 'a-button'}>{props.text}</button>
    )
}

export default Button;
