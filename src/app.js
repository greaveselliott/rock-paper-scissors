import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import './app.scss';
import ScoreBoard from './components/score-board';
import StartGame from './components/start-game';
import Board from './components/board';
import AI from './components/ai';
import Modernizr from 'modernizr';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <div className="app">
            <aside className="app__sidebar">
              <ScoreBoard/>
            </aside>
            <main className="app__main">
              <StartGame className="app__layer"/>
              <Board className="app__layer"/>
            </main>
            <AI/>
          </div>
      </Provider>
    );
  }
}

export default App;
