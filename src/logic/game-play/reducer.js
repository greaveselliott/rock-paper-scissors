import * as CONSTANTS from './constants';
import * as actions from './actions';

export const initialState = {
    game_started: false,
    game_complete: false
};

const game_play = (state = initialState, action) => {
  switch (_.get(action, 'type', undefined)) {

    case CONSTANTS.DISPLAY_START_SCREEN:
    case CONSTANTS.DISPLAY_SIGNAL_OPTIONS:
    case CONSTANTS.SELECT_SIGNAL_OPTION:
    case CONSTANTS.COMPUTER_SELECT_SIGNAL_OPTION:
    case CONSTANTS.REVEAL_SELECTED_SIGNAL_OPTIONS:
    case CONSTANTS.START_GAME:
    case CONSTANTS.RESTART_GAME:
    case CONSTANTS.REMEMBER_OPONENTS_SELECTION:
    case CONSTANTS.DECIDE_WINNER:
    case CONSTANTS.COMPLETE_GAME:
    case CONSTANTS.INCREMENT_PLAYER_SCORE:

    default:
      return state;
  }
};

export default game_play;
