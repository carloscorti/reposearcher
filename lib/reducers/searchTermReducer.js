import { SET_SEARCH_TERM } from '../actions/types';

const searchTermReducer = (store = '', action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return action.payload;
    default:
      return store;
  }
};

export default searchTermReducer;
