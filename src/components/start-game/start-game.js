import React, { Component } from 'react';
import './start-game.scss';
import Logo from '../logo';
import Heading from '../heading';
import ButtonToggleMode from '../button-toggle-mode';
import Button from '../button';

export default class StartGame extends Component {
    render() {
        return (
            <div>
                <Logo/>
                <Heading title="Pick mode."/>
                <ButtonToggleMode/>
                <Button className="a-button--large" text="Start"/>
            </div>
        )
    }
}
