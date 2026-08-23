export const get_random_symbol = (options, random = Math.random) => {
    const keys = Object.keys(options);
    const random_option_index = Math.min(keys.length - 1, Math.floor(random() * keys.length));

    return keys[random_option_index];
};

const get_counter_symbol = (options, symbol) => {
    return Object.keys(options).filter((option) => options[option].indexOf(symbol) !== -1)[0];
};

const predict_player_symbol = (options, history) => {
    const symbols = Object.keys(options);
    const player_history = history
        .map((round) => round.player)
        .filter((symbol) => symbols.indexOf(symbol) !== -1)
        .slice(-20);
    const scores = symbols.reduce((result, symbol) => {
        result[symbol] = 0;
        return result;
    }, {});

    player_history.forEach((symbol, index) => {
        scores[symbol] += 1 + (index / Math.max(player_history.length, 1)) * 2;
    });

    const last_symbol = player_history[player_history.length - 1];
    player_history.forEach((symbol, index) => {
        if (symbol === last_symbol && player_history[index + 1]) {
            scores[player_history[index + 1]] += 3;
        }
    });

    return symbols.reduce((prediction, symbol) => {
        return scores[symbol] > scores[prediction] ? symbol : prediction;
    }, symbols[0]);
};

const get_prediction_chance = (rating) => {
    return 0.08 + ((rating - 400) / 2400) * 0.84;
};

const get_blunder_chance = (rating) => {
    if (rating <= 400) {
        return 0.65;
    }

    if (rating <= 800) {
        return 0.35;
    }

    return 0;
};

export const get_computer_symbol = (options, rating = 1200, history = [], random = Math.random) => {
    if (history.length === 0) {
        return get_random_symbol(options, random);
    }

    const prediction = predict_player_symbol(options, history);
    const roll = random();
    const prediction_chance = get_prediction_chance(rating);

    if (roll < prediction_chance) {
        return get_counter_symbol(options, prediction);
    }

    if (roll < prediction_chance + get_blunder_chance(rating)) {
        return options[prediction][0];
    }

    return get_random_symbol(options, random);
};
