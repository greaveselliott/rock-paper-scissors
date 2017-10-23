import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './board.scss';
import HandSignalSelection from '../hand-signal-selection';
import Heading from '../heading';
import Button from '../button';

const Board = ({className, active, hand_signals, selected_player_symbol, selected_opponent_symbol, is_revealing, outcome}) => {
    return (
        <div className={`${className}${active ? "--inactive": ""} l-board`}>
            <div className="l-board__opponent">
                <HandSignalSelection 
                    hand_signals={hand_signals} 
                    is_contestant_player={false} 
                    selected_symbol={selected_opponent_symbol} 
                    is_revealing={is_revealing}
                    has_won={!outcome}
                />
            </div>
            <div className="l-board__notification">
                {outcome === null && <Heading title="Select a symbol."/>}
                {outcome !== null && <Heading title={`You ${outcome}!`}/>}
                {outcome !== null && <Button modifier="--large" text="Restart game"/>}
            </div>
            <div className="l-board__player">
                <HandSignalSelection 
                    hand_signals={hand_signals} 
                    is_contestant_player={true} 
                    selected_symbol={selected_player_symbol}
                    is_revealing={is_revealing}
                    has_won={outcome}
                />
            </div>
        </div>
    )
}

Board.propTypes = {
    hand_signals: PropTypes.array,
};

const mapDispatchToProps = dispatch => ({
    
});

const mapStateToProps = state => {
    return { 
        hand_signals: Object.keys(state.store.ruleset),
        selected_player_symbol: state.store.player.selected_symbol,
        selected_opponent_symbol: state.store.opponent.selected_symbol,
        outcome: state.store.outcome,
        active: state.store.game_started,
        is_revealing: state.store.is_revealing
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);