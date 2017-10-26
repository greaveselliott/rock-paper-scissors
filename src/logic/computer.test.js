import { get_random_symbol } from './computer';
import { rock_paper_scissors } from './configuration';

describe('Reducer', () => {

    it('Should generate a random symbol from the configuration file.', () => {
        const random_symbol = get_random_symbol(rock_paper_scissors);
        expect(random_symbol).toEqual(expect.any(String));
    });

});