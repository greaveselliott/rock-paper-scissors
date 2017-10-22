import React, { Component } from 'react';
import './start-game.scss';
import Logo from '../logo';
import Heading from '../heading';
import ButtonToggleMode from '../button-toggle-mode';
import ButtonStartGame from '../button-start-game';

export default class StartGame extends Component {
    render() {
        return (
            <div>
                <Logo/>
                <Heading title="Pick mode"/>
                <ButtonToggleMode/>
                <ButtonStartGame/>
            </div>
        )
    }
}
