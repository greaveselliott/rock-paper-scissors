import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import './app.css';
import Dispatcher from 'redux-devtools-dispatch';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
        <Dispatcher />
        </div>
      </Provider>
    );
  }
}

export default App;
