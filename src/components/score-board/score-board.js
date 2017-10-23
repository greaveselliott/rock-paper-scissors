import React from 'react'
import Avatar from '../avatar';
import ImagePlayer from './player.svg';
import ImageOpponent from './opponent.svg';
import './score-board.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const ScoreBoard = ({opponent_score, player_score}) => {
    return (
            <div className="o-score-board">
                <section className="o-score-board__player">
                    <Avatar image={ImageOpponent} name="Opponent" score={opponent_score}/>
                </section>
                <section className="o-score-board__player">
                    <Avatar image={ImagePlayer} name="Player" score={player_score}/>
                </section>
            </div>
    );
};

Avatar.propTypes = {
    player_score: PropTypes.number,
    opponent_score: PropTypes.number
};

const mapStateToProps = state => {
    return { 
        player_score: state.store.player.score,
        opponent_score: state.store.opponent.score 
    };
};

export default connect(mapStateToProps)(ScoreBoard);