import { combineReducers } from 'redux';
import game_play from '../logic/game-play/reducer';
import rules from '../logic/rules/reducer';

export default function createReducer() {
  return combineReducers({
    game_play,
    rules
  });
}
