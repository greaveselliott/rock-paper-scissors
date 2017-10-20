import { ADD_ITEM } from './constants';

export const initialState = [
    {
      score: 0,
      isHuman: true
    },
    {
      score: 0,
      is_human: false
    }
];

const players = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default players;
