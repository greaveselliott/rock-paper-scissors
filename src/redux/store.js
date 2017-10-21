import { createStore, applyMiddleware, compose } from 'redux';
import createReducer from './reducers';
import { ConnectedRouter, routerMiddleware, push } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory'

export const history = createHistory();
const middleware = routerMiddleware(history)

const composeEnhancers =
  (process.env.NODE_ENV !== 'production' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const configureStore = (initialState = {}) => {
  return createStore(
    createReducer(),
    initialState,
    composeEnhancers(
      middleware(),
      applyMiddleware()
    )
  );
};

export default configureStore;
