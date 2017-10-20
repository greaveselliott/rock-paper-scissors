import * as CONSTANTS from './constants';

export const initialState = {
  players: [
    {
      score: 0,
      isHuman: true
    },
    {
      score: 0,
      is_human: false
    }
  ],
  game_mode: ["rock-paper-scissors", "rock-paper-scissors-lizard-spock"],
  game_started: false,
  game_complete: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

  }
};

export default reducer;
