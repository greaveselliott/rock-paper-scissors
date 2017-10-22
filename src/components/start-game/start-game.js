import React, { Component } from 'react';
import './start-game.scss';
import Logo from '../logo';
import Heading from '../heading';
import ButtonToggleMode from '../button-toggle-mode';
import Link from 'react-router-dom/Link';

export default class StartGame extends Component {
    render() {
        return (
            <div>
                <Logo/>
                <Heading title="Pick mode."/>
                <ButtonToggleMode/>
                <Link className="a-button--large" to="/start">Play</Link>
            </div>
        )
    }
}
