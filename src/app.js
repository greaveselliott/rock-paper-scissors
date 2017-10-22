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
import { AnimatedRoute } from 'react-router-transition';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div className="app">
            <aside className="app__sidebar">
              <ScoreBoard/>
            </aside>
            <main className="app__main">
              <AnimatedRoute
                className="app__route"
                exact
                path="/"
                component={StartGame}
                atEnter={{ offset: 0 }}
                atLeave={{ offset: -200 }}
                atActive={{ offset: 0 }}
                mapStyles={(styles) => ({
                  transform: `translateY(${styles.offset}%)`
                })}
              />
              <AnimatedRoute
                className="app__route"
                path="/start"
                component={Board}
                atEnter={{ offset: 0 }}
                atLeave={{ offset: 100 }}
                atActive={{ offset: -100 }}
                mapStyles={(styles) => ({
                  transform: `translateY(${styles.offset}%)`
                })}
              />
            </main>
           {/* <Dispatcher actionCreators={actions}/>*/}
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
