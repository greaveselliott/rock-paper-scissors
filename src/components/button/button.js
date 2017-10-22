import React from 'react';
import './button.scss';

const Button = props => {
    return (
        <button className={props.modifier ? `a-button${props.modifier}` : 'a-button'}>{props.text}</button>
    )
}

export default Button;
