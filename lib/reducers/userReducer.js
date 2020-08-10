import { FETCH_USER } from '../actions/types';

const userReducer = (store = null, action) => {
  switch (action.type) {
    case FETCH_USER:
      return action.payload;
    default:
      return store;
  }
};

export default userReducer;
