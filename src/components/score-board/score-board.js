import React from 'react'
import Avatar from '../avatar';
import ImagePlayer from './player.svg';
import ImageOpponent from './opponent.svg';
import './score-board.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const ScoreBoard = ({opponent_score, player_score, opponent_name, player_name}) => {
    return (
            <div className="o-score-board">
                <section className="o-score-board__contestent--opponent">
                    <Avatar image={ImageOpponent} name={opponent_name} score={opponent_score}/>
                </section>
                <section className="o-score-board__contestent--player">
                    <Avatar image={ImagePlayer} name={player_name} score={player_score}/>
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
        opponent_score: state.store.opponent.score,
        opponent_name: state.store.player.is_human ? `Computer ${state.store.opponent.rating}` : 'Computer 2',
        player_name: state.store.player.is_human ? 'Player' : 'Computer 1'
    };
};

export default connect(mapStateToProps)(ScoreBoard);
