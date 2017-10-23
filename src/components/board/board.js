import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './board.scss';
import HandSignalSelection from '../hand-signal-selection';
import Heading from '../heading';
import Link from 'react-router-dom/Link';

class Board extends Component {

    render() {
        return (
            <div className="l-board">
                <div className="l-board__opponent">
                    <HandSignalSelection 
                        hand_signals={this.props.hand_signals} 
                        is_contestant_player={false} 
                        selected_symbol={this.props.selected_opponent_symbol} 
                        is_revealing={this.props.is_revealing}
                        has_won={!this.props.outcome}
                    />
                </div>
                <div className="l-board__notification">
                    <Heading title="Select a symbol."/>
                    <Heading title={`You ${this.props.outcome}!`}/>
                    <Link className="a-button--large" to="/">Restart game</Link>
                </div>
                <div className="l-board__player">
                    <HandSignalSelection 
                        hand_signals={this.props.hand_signals} 
                        is_contestant_player={true} 
                        selected_symbol={this.props.selected_player_symbol}
                        is_revealing={this.props.is_revealing}
                        has_won={!this.props.outcome}
                    />
                </div>
            </div>
        )
    }
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
        is_revealing: state.store.is_revealing
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);