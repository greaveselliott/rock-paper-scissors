import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './board.scss';
import HandSignalSelection from '../hand-signal-selection';
import Heading from '../heading';
import Button from '../button';
import { decide_winner, restart_game } from '../../logic/actions';

const Board = ({className, active, hand_signals, selected_player_symbol, selected_opponent_symbol, is_revealing, outcome, on_decide_winner, on_reset_game}) => {
    return (
        <div className={`${className}${active ? "--inactive": ""} l-board`}>
            <div className={`l-board__opponent${enter_exit_modifier(is_revealing)}`}>
                <HandSignalSelection 
                    hand_signals={hand_signals} 
                    is_contestant_player={false} 
                    selected_symbol={selected_opponent_symbol} 
                    is_revealing={is_revealing}
                    has_won={!outcome}
                />
            </div>
            
            <div className="l-board__notification-area">
                <div className={`l-board__select-symbol${enter_exit_modifier(is_revealing)}`}><Heading title="Select a symbol."/></div>
                <div className={`l-board__outcome${enter_exit_modifier(is_revealing === false)}`}>
                    <Heading title={`You ${outcome}!`}/>
                    <Button click_handler={on_reset_game} modifier="--large" text="Play again"/>
                </div>
            </div>
            <div className={`l-board__player${enter_exit_modifier(is_revealing)}`}>
                <HandSignalSelection 
                    hand_signals={hand_signals} 
                    is_contestant_player={true} 
                    selected_symbol={selected_player_symbol}
                    is_revealing={is_revealing}
                    has_won={outcome}
                />
                <Button click_handler={on_decide_winner} className={`l-board__confirm-selection${confirm_selection_modifier(selected_player_symbol, is_revealing)}`} text="Confirm selection"/>
            </div>
        </div>
    )
}

const enter_exit_modifier = (is_revealing) => {
    return is_revealing === false ? '--enter' : '--exit';
};

const confirm_selection_modifier = (selected_player_symbol, is_revealing) => {
    return selected_player_symbol !== null && is_revealing === false ? '--enter' : 
        (selected_player_symbol !== null && is_revealing ? '--exit' : '--inactive');
};

Board.propTypes = {
    hand_signals: PropTypes.array,
};

const mapDispatchToProps = dispatch => ({
    on_decide_winner: () => dispatch(decide_winner()),
    on_reset_game: () => dispatch(restart_game())
});

const mapStateToProps = state => {
    return { 
        hand_signals: Object.keys(state.store.ruleset),
        selected_player_symbol: state.store.player.selected_symbol,
        selected_opponent_symbol: state.store.opponent.selected_symbol,
        outcome: state.store.outcome,
        active: state.store.game_started,
        is_ai_alive: state.store.player.is_ai_alive,
        is_human: state.store.player.is_human,
        is_revealing: state.store.is_revealing
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);