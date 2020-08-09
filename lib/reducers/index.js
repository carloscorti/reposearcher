import { combineReducers } from 'redux';
import userReducer from './userReducer';
import welcomeReducer from './welcomeReducer';
import searchTermReducer from './searchTermReducer';

export default combineReducers({
  search: searchTermReducer,
  user: userReducer,
  welcome: welcomeReducer,
});
