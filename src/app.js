import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import './app.css';
import Dispatcher from 'redux-devtools-dispatch';
import * as actions from './logic/actions';
import { ConnectedRouter, push } from 'react-router-redux';
import { history } from './redux/store';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div className="app">
            <Dispatcher actionCreators={actions}/>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
