import React, { Component } from 'react'
import Avatar from '../avatar';
import ImagePlayer from './player.svg';
import ImageOpponent from './opponent.svg';
import './score-board.scss';

const ScoreBoard = props => {
    return (
            <div className="o-score-board">
                <section className="o-score-board__player">
                    <Avatar image={ImageOpponent} name="Opponent"/>
                </section>
                <section className="o-score-board__player">
                    <Avatar image={ImagePlayer} name="Player"/>
                </section>
            </div>
    );
};

export default ScoreBoard