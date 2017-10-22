import React from 'react'
import "./button-toggle-mode.scss";
import Button from '../button'

function ButtonToggleMode() {
    return (
        <div className="button-toggle-mode">
            <div className="button-toggle-mode__column">
                <Button text="Human VS Computer"/>
            </div>
            <div className="button-toggle-mode__column">
                <Button text="Computer VS Computer"/>
            </div>
        </div>
    )
}

export default ButtonToggleMode
