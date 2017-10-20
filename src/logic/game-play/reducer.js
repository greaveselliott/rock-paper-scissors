import * as CONSTANTS from './constants';
import _ from 'lodash';

export const initialState = {
    players: {
      player_one: {
        score: 0,
        isHuman: true,
        selected_symbol: undefined
      },
      player_two: {
          score: 0,
          is_human: false,
          selected_symbol: undefined
      }
    },
    game_started: false,
    game_complete: false,
    display_siganl_options: false,
    reveal_selected_signal_options: false
};

const game_play = (state = initialState, action) => {
  switch (_.get(action, 'type', undefined)) {

    case CONSTANTS.DISPLAY_START_SCREEN:
      return {
        ...state,
        game_started: true
      }

    case CONSTANTS.DISPLAY_SIGNAL_OPTIONS:
      return {
        ...state,
        display_siganl_options: true,
      }

    case CONSTANTS.SELECT_SIGNAL_OPTION:
      return {
        ...state,
        [action.player]: {
          selected_symbol: action.selected_symbol
        }
      }
    
    case CONSTANTS.REVEAL_SELECTED_SIGNAL_OPTIONS:
      return {
        ...state,
        reveal_selected_signal_options: true
      }
      
    case CONSTANTS.START_GAME:
      return {
        ...state,
        start_game: true
      }
    case CONSTANTS.RESTART_GAME: {
      return {
        ...initialState
      }
    }

    case CONSTANTS.DECIDE_WINNER:
      let player_one_symbol = state.player_one.selected_symbol;
      let player_two_symbol = state.player_two.selected_symbol;



      return {
        
      }
    case CONSTANTS.COMPLETE_GAME:
    case CONSTANTS.INCREMENT_PLAYER_SCORE:

    default:
      return state;
  }
};

export default game_play;
