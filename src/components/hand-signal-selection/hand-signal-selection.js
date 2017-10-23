import React from 'react'
import './hand-signal-selection.scss';
import HandSignal from '../hand-signal';
import { select_signal_option } from '../../logic/actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const HandSignalSelection = ({hand_signals, is_contestant_player, selected_symbol, is_revealing, has_won, on_select_symbol}) => {
    return (
        <div className="o-hand-signal-selection">
            {
                hand_signals && hand_signals.map((symbol) => {
                    return (
                        <HandSignal 
                            key={symbol} 
                            click_handler={() => { is_contestant_player && on_select_symbol(symbol)}}
                            icon={symbol} 
                            name={symbol} 
                            modifier={get_modifier(symbol, selected_symbol, is_contestant_player, is_revealing, has_won)}
                        />
                    )
                })
            }
        </div>
    );
}

HandSignalSelection.propTypes = {
    hand_signals: PropTypes.array.isRequired,
    is_contestant_player: PropTypes.bool.isRequired,
    has_won: PropTypes.bool
};

const get_modifier = (this_symbol, selected_symbol, is_contestant_player, is_revealing, has_won) => {
    let modifier = "";
      
        modifier += (is_revealing === false && is_contestant_player === false) ? "--hidden" : "";         
        modifier += (selected_symbol && this_symbol !== selected_symbol) ? "--not-selected" : "";
        modifier += (selected_symbol && this_symbol === selected_symbol && is_contestant_player) ? "--selected-by-player" : "";
        modifier += (is_revealing === true && selected_symbol && this_symbol === selected_symbol && is_contestant_player === false) ? "--selected-by-opponent" : "";
        modifier += (selected_symbol && this_symbol === selected_symbol && has_won) ? "--has-won" : "";
        modifier += (selected_symbol && this_symbol === selected_symbol && !has_won) ? "--has-lost" : "";

    return modifier;
};


const mapDispatchToProps = dispatch => ({
    on_select_symbol: (symbol) => {
        dispatch(select_signal_option("player", symbol));
        dispatch(select_signal_option("opponent"));
    }
});

export default connect(null, mapDispatchToProps)(HandSignalSelection);