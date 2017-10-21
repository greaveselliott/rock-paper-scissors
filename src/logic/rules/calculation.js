import _ from 'lodash';
import {rock_paper_scissors} from './configuration';
import * as CONSTANTS from './constants';

const calculation = (player_symbol, oponent_symbol, configuration = rock_paper_scissors) => {
    let outcome = CONSTANTS.OUTCOME_DRAW;
    
    if (player_symbol === oponent_symbol) {
        return outcome;
    }

    _.each(configuration[player_symbol], (lose_condition) => {
        // If the oponents symbol is one of the players weeknesses, the oponent wins
        if (lose_condition === oponent_symbol) {
            outcome = CONSTANTS.OUTCOME_WIN;
        } else {
            outcome = CONSTANTS.OUTCOME_LOSE;
            return false;
        }
    });

    return outcome;
}

export default calculation;