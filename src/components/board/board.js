import React, { Component } from 'react'
import './board.scss';
import HandSignalSelection from '../hand-signal-selection';
import Heading from '../heading';

export default class Board extends Component {
    render() {
        return (
            <div className="board">
                <div className="board__opponent">
                    <HandSignalSelection/>
                </div>
                <div className="board__notification">
                    <Heading title="Select a symbol."/>
                </div>
                <div className="board__player">
                    <HandSignalSelection/>
                </div>
            </div>
        )
    }
}
