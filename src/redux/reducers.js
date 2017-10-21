import { combineReducers } from 'redux';
import store from '../logic/reducer';

export default function createReducer() {
  return combineReducers({
    store
  });
}
