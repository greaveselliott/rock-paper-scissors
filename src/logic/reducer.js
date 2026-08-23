import * as CONSTANTS from './constants';
import _ from 'lodash';
import calculation from './calculation';
import * as configuration from './configuration';
import { get_computer_symbol, get_random_symbol } from './computer';

export const initial_state = {
    ruleset: configuration.rock_paper_scissors,
    player: {
      score: 0,
      is_human: true,
      selected_symbol: null,
    },
    opponent: {
      score: 0,
      is_human: false,
      selected_symbol: null,
      rating: configuration.default_computer_rating,
    },
    round_history: [],
    outcome: null,
    game_started: false,
    is_revealing: false,
    game_outcome: undefined,
};

const reducers = (state = initial_state, action) => {
  switch (_.get(action, 'type', undefined)) {

    case CONSTANTS.COMPUTER_OR_HUMAN_PLAYER:
      return {
        ...state,
          player: {
            ...state.player,
            score: 0,
            selected_symbol: null,
            is_human: action.is_human
          },
          opponent: {
            ...state.opponent,
            score: 0,
            selected_symbol: null
          },
          round_history: []
      };

    case CONSTANTS.SET_COMPUTER_RATING:
      return {
        ...state,
        player: {
          ...state.player,
          score: 0
        },
        opponent: {
          ...state.opponent,
          score: 0,
          rating: action.rating
        },
        round_history: []
      };

    case CONSTANTS.SELECT_SIGNAL_OPTION: {
      const is_rated_opponent = action.player === 'opponent' && state.player.is_human;
      const computer_symbol = is_rated_opponent
        ? get_computer_symbol(state.ruleset, state.opponent.rating, state.round_history)
        : get_random_symbol(state.ruleset);

      return { 
        ...state,
        [action.player]: {
          ...state[action.player],
          selected_symbol: action.selected_symbol || computer_symbol
        }
      };
    }
      
    case CONSTANTS.START_GAME:
      return {
          ...state,
          game_started: true
      };
    
    case CONSTANTS.RESTART_GAME:
      return {
        ...state,
          is_revealing: false,
          game_started: false,
          outcome: null,
          player: {
            ...state.player,
            selected_symbol: null
          },
          opponent: {
            ...state.opponent,
            selected_symbol: null
          }
      };

    case CONSTANTS.DECIDE_WINNER:
      let player_symbol = state.player.selected_symbol;
      let opponent_symbol = state.opponent.selected_symbol;
      let outcome = calculation(player_symbol, opponent_symbol, state.ruleset);
      let winner = outcome === CONSTANTS.OUTCOME_WIN ? 'player' : 'opponent';
      let incremented_winners_score = outcome === CONSTANTS.OUTCOME_DRAW ?  state[winner].score : state[winner].score + 1;
      let round_history = state.round_history.concat({
        player: player_symbol,
        opponent: opponent_symbol,
        outcome
      }).slice(-30);
      
      return {
          ...state,
          outcome,
          is_revealing: true,
          [winner]: {
              ...state[winner],
              score: incremented_winners_score
          },
          round_history
      };
    
    case CONSTANTS.INCREMENT_PLAYER_SCORE:
      return {
          ...state,
          [action.player]: {
            ...state[action.player],
            score: state[action.player].score + 1
          }
      };

    default:
      return state;
  }
};

export default reducers;
