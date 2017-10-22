import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import './app.scss';
import Dispatcher from 'redux-devtools-dispatch';
import * as actions from './logic/actions';
import { ConnectedRouter } from 'react-router-redux';
import { history } from './redux/store';
import ScoreBoard from './components/score-board';
import StartGame from './components/start-game';
import Board from './components/board';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div className="app">
            <aside className="app__sidebar">
            </aside>
            <main className="app__main">
              <Board/>
              <StartGame/>
            </main>
           {/* <Dispatcher actionCreators={actions}/>*/}
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
