import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import './app.css';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
        </div>
      </Provider>
    );
  }
}

export default App;
