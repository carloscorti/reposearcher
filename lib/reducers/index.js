import { combineReducers } from 'redux';
import reposReducer from './reposReducer';
import welcomeReducer from './welcomeReducer';
import searchTermReducer from './searchTermReducer';
import userReducer from './userReducer';

/**
 * Reducers entry point: combine all reducers into redux
 */

export default combineReducers({
  search: searchTermReducer,
  repos: reposReducer,
  welcome: welcomeReducer,
  user: userReducer,
});
