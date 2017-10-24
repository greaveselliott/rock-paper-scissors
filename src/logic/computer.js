import _ from 'lodash';

export const get_random_symbol = (options) => {
    const keys = Object.keys(options);
    const length = keys.length;

    const random_option_index = _.random(0, length - 1);

    return keys[random_option_index];
};