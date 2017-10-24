import _ from 'lodash';
import * as CONSTANTS from './constants';

const calculation = (player_symbol, opponent_symbol, configuration) => {
    let outcome = CONSTANTS.OUTCOME_DRAW;
    
    if (player_symbol === opponent_symbol) {
        return outcome;
    }

    _.each(configuration[player_symbol], (lose_condition) => {
        // If the opponents symbol is one of the players weeknesses, the opponent wins
        if (lose_condition === opponent_symbol) {
            outcome = CONSTANTS.OUTCOME_WIN;
        } else {
            outcome = CONSTANTS.OUTCOME_LOSE;
            return false;
        }
    });

    return outcome;
}

export default calculation;