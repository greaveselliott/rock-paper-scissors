import * as CONSTANTS from './constants';
import _ from 'lodash';
import calculation from './calculation';
import * as configuration from './configuration';
import { get_random_symbol } from './computer';

export const initialState = {
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
    },
    outcome: null,
    game_started: false,
    is_revealing: false,
    game_outcome: undefined,
    display_siganl_options: false,
    reveal_selected_signal_options: false
};

const game_play = (state = initialState, action) => {
  switch (_.get(action, 'type', undefined)) {

    case CONSTANTS.ROCK_PAPER_SCISSORS_LIZARD_SPOCK:
    return _.merge(state,{
      ruleset: configuration.rock_paper_scissors_lizard_spock
    });

    case CONSTANTS.DISPLAY_START_SCREEN:
      return {
        ..._.merge(state,{
          game_started: true
        })
      };

    case CONSTANTS.COMPUTER_OR_HUMAN_PLAYER:
      return {
        ..._.merge(state,{
          player: {
            is_human: action.is_human
          }
        })
      };

    case CONSTANTS.DISPLAY_SIGNAL_OPTIONS:
      return {
        ..._.merge(state,{
          display_siganl_options: true 
        })
      };

    case CONSTANTS.SELECT_SIGNAL_OPTION:
      return { 
        ..._.merge(state,{
          [action.player]: {
            selected_symbol: state[action.player].is_human ? action.selected_symbol : get_random_symbol(state.ruleset)     
          }
        })
      };

    case CONSTANTS.REVEAL_SELECTED_SIGNAL_OPTIONS:
      return {
          ..._.merge(state,{
          reveal_selected_signal_options: true
        })
      };
      
    case CONSTANTS.START_GAME:
      return {
          ..._.merge(state,{
          start_game: true
        })
      };
    
    case CONSTANTS.RESTART_GAME:
      return {
        ..._.merge(state,{
          is_revealing: false,
          game_started: false,
          outcome: null,
          player: {
            selected_symbol: null
          },
          opponent: {
            selected_symbol: null
          }
      })
    };

    case CONSTANTS.DECIDE_WINNER:
      let player_symbol = state.player.selected_symbol;
      let opponent_symbol = state.opponent.selected_symbol;
      let outcome = calculation(player_symbol, opponent_symbol, state.ruleset);
      let winner = outcome === CONSTANTS.OUTCOME_WIN ? 'player' : 'opponent';
      let incremented_winners_score = outcome === CONSTANTS.OUTCOME_DRAW ?  state[winner].score : state[winner].score + 1;
      
      return {
          ..._.merge(state,{
            outcome,
            is_revealing: true,
            [winner]: {
              score: incremented_winners_score
            }
        })
      };
    
    case CONSTANTS.COMPLETE_GAME:
      return {
        ..._.merge(state,{
          complete: true
        })
      };
    
    case CONSTANTS.INCREMENT_PLAYER_SCORE:
      return {
          ..._.merge(state,{
          [action.player]: {
            score: state[action.player].score + 1
          }
        })
      };

    default:
      return state;
  }
};

export default game_play;
