import _ from 'lodash';

export class Calculation {
    constructor (configuration, players) {
        var result = [];

        _.each(players, () => {
            
        })

    }

    hasDrawn (player_symbol, oponent_symbol) {
        return player_symbol === oponent_symbol;
    }

    hasWon (player_symbol, oponent_symbol, configuration = configuration) {
        result = false;

        _.each(configuration[player_symbol], (condition) => {
            if (condition === player_two_symbol) {
                result = true;
            }
        });

        return result
    }
}