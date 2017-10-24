import calculation from './calculation';
import {rock_paper_scissors, rock_paper_scissors_lizard_spock} from './configuration';
import * as CONSTANTS from './constants';
import _ from 'lodash';


describe(`Calculation for ${CONSTANTS.ROCK_PAPER_SCISSORS}`, () => {

    const data_drive_calculation = [
        {
            description: 'Player Rock should win against opponents Scissors.', 
            configuration: rock_paper_scissors,
            player_symbol: 'rock',
            opponent_symbol: 'scissors',
            expect: CONSTANTS.OUTCOME_WIN
        },
        {
            description: 'Player Rock should draw with opponents Rock.',        
            configuration: rock_paper_scissors,
            player_symbol: 'rock',
            opponent_symbol: 'rock',
            expect: CONSTANTS.OUTCOME_DRAW
        },
        {
            description: 'Players paper should lose to opponents Paper.',        
            configuration: rock_paper_scissors,
            player_symbol: 'paper',
            opponent_symbol: 'scissors',
            expect: CONSTANTS.OUTCOME_LOSE
        }
    ];

    _.each(data_drive_calculation, (unit_test) => {
        it(unit_test.description, () => {
            // Arrange
            const player_symbol = unit_test.player_symbol;
            const opponent_symbol = unit_test.opponent_symbol;
            
            // Act
            let outcome = calculation(player_symbol, opponent_symbol, unit_test.configuration);

            // Assert
            expect(outcome).toEqual(unit_test.expect);
        });
    })
});