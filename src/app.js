import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import './app.css';
import Dispatcher from 'redux-devtools-dispatch';
import * as actions from './logic/actions';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <Dispatcher actionCreators={actions}/>
        </div>
      </Provider>
    );
  }
}

export default App;
