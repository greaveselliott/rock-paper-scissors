import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './board.scss';
import HandSignalSelection from '../hand-signal-selection';
import Heading from '../heading';
import ButtonRestartGame from '../button-restart-game';

class Board extends Component {

    render() {
        return (
            <div className="l-board">
                <div className="l-board__opponent">
                    <HandSignalSelection hand_signals={this.props.hand_signals}/>
                </div>
                <div className="l-board__notification">
                    <Heading title="Select a symbol."/>
                    <Heading title="You lose."/>
                    <ButtonRestartGame text="Play again"/>
                </div>
                <div className="l-board__player">
                    <HandSignalSelection hand_signals={this.props.hand_signals}/>
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
    return { hand_signals: Object.keys(state.store.ruleset) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);