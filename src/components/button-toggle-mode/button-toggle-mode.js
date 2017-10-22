import React from 'react'
import "./button-toggle-mode.scss";
import Button from '../button'

function ButtonToggleMode() {
    return (
        <div className="m-button-toggle-mode">
            <div className="m-button-toggle-mode__column">
                <Button text="Human VS Computer" modifier="--toggled"/>
            </div>
            <div className="m-button-toggle-mode__column">
                <Button text="Computer VS Computer" modifier="--not-toggled"/>
            </div>
        </div>
    )
}

export default ButtonToggleMode
