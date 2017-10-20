import * as CONSTANTS from './constants';

export const initialState = {
    title: "rock-paper-scissors",
    ruleset: {
      rock: ['scissors'],
      paper: ['rock'],
      scissors: ['paper']
    }
};

const rules = (state = initialState, action) => {
  switch (action.type) {
    // Really long, I know - I'm not a fan of acryonym variable names :)
    case CONSTANTS.ROCK_PAPER_SCISSORS_LIZARD_SPOCK:
      return {
        ...state,
        title: "rock-paper-scissors",
        ruleset: {
          rock: ['scissors','lizard'],
          paper: ['rock','spock'],
          scissors: ['paper','lizard'],
          lizard: ['spock', 'paper'],
          spock: ['rock', 'scissors']
        }
      };

    default:
      return state;
  }
};

export default rules;
