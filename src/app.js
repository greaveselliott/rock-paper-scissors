import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import './app.scss';
import Dispatcher from 'redux-devtools-dispatch';
import * as actions from './logic/actions';
import ScoreBoard from './components/score-board';
import StartGame from './components/start-game';
import Board from './components/board';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <div className="app">
            <aside className="app__sidebar">
            <Dispatcher actionCreators={actions}/> 
              <ScoreBoard/>
            </aside>
            <main className="app__main">
              <StartGame/>
              <Board/>
            </main>
          </div>
      </Provider>
    );
  }
}

export default App;
