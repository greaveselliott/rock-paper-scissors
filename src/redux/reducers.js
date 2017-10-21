import { combineReducers } from 'redux';
import store from '../logic/reducer';
import { routerReducer } from 'react-router-redux'


export default function createReducer() {
  return combineReducers({
    store,
    router: routerReducer
  });
}
