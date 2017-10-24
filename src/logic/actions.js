import * as CONSTANTS from './constants';

export const display_start_screen = () => {
    return {
        type: CONSTANTS.DISPLAY_START_SCREEN
    }
};

export const computer_or_human_player = (is_human) => {
    return {
        type: CONSTANTS.COMPUTER_OR_HUMAN_PLAYER,
        is_human
    }
};

export const select_signal_option = (player = "player", selected_symbol) => {
    return {
        type: CONSTANTS.SELECT_SIGNAL_OPTION,
        player,
        selected_symbol
    }
};

export const reveal_selected_signal_options = () => {
    return {
        type: CONSTANTS.REVEAL_SELECTED_SIGNAL_OPTIONS
    }
};

export const start_game = () => {
    return {
        type: CONSTANTS.START_GAME
    }
};

export const restart_game = () => {
    return {
        type: CONSTANTS.RESTART_GAME
    }
};

export const decide_winner = () => {
    return {
        type: CONSTANTS.DECIDE_WINNER
    }
};

export const increment_player_Score = player => {
    return {
        type: CONSTANTS.INCREMENT_PLAYER_SCORE,
        player
    }
};