import { get_computer_symbol, get_random_symbol } from './computer';
import { rock_paper_scissors } from './configuration';

describe('Computer player', () => {

    it('Should generate a random symbol from the configuration file.', () => {
        const random_symbol = get_random_symbol(rock_paper_scissors);
        expect(random_symbol).toEqual(expect.any(String));
    });

    it('Should make a predictable mistake at 400 rating.', () => {
        const history = [
            {player: 'rock', opponent: 'paper'},
            {player: 'rock', opponent: 'rock'},
            {player: 'rock', opponent: 'scissors'}
        ];

        expect(get_computer_symbol(rock_paper_scissors, 400, history, () => 0.2)).toBe('scissors');
    });

    it('Should counter a learned pattern at 2800 rating.', () => {
        const history = [
            {player: 'rock', opponent: 'scissors'},
            {player: 'rock', opponent: 'paper'},
            {player: 'rock', opponent: 'rock'}
        ];

        expect(get_computer_symbol(rock_paper_scissors, 2800, history, () => 0.2)).toBe('paper');
    });

});
