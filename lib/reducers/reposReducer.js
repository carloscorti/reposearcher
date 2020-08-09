import { FETCH_REPOS } from '../actions/types';

const reposReducer = (store = null, action) => {
  switch (action.type) {
    case FETCH_REPOS:
      return action.payload;
    default:
      return store;
  }
};

export default reposReducer;
