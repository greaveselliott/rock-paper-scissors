import { ADD_ITEM } from './constants';

export const initialState = {
    game_started: false,
    game_complete: false
};

const game_play = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default game_play;
