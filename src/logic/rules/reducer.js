import * as CONSTANTS from './constants';
import * as configuration from './configuration';
import _ from 'lodash';

export const initialState = {
    title: CONSTANTS.ROCK_PAPER_SCISSORS,
    ruleset: configuration.rock_paper_scissors
};

const rules = (state = initialState, action) => {

  switch (_.get(action, 'type', undefined)) {
    // Really long, I know - I'm not a fan of acryonym variable names :)
    case CONSTANTS.ROCK_PAPER_SCISSORS_LIZARD_SPOCK:
      return {
        ...state,
        title: CONSTANTS.ROCK_PAPER_SCISSORS_LIZARD_SPOCK,
        ruleset: configuration.rock_paper_scissors_lizard_spock
      };

    default:
      return state;
  }
};

export default rules;
