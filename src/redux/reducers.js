import { combineReducers } from 'redux';
import players from '../logic/players/reducer';
import game_play from '../logic/game_play/reducer';
import rules from '../logic/rules/reducer';

export default function createReducer() {
  return combineReducers({
    players,
    game_play,
    rules
  });
}
