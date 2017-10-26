import { createStore, applyMiddleware, compose } from 'redux';
import createReducer from './reducers';

const composeEnhancers =
  (process.env.NODE_ENV !== 'production' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const configureStore = (initial_state = {}) => {
  return createStore(
    createReducer(),
    initial_state,
    composeEnhancers(
      applyMiddleware()
    )
  );
};

export default configureStore;
