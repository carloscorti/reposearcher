import { combineReducers } from 'redux';
import reposReducer from './reposReducer';
import welcomeReducer from './welcomeReducer';
import searchTermReducer from './searchTermReducer';
import userReducer from './userReducer';

export default combineReducers({
  search: searchTermReducer,
  repos: reposReducer,
  welcome: welcomeReducer,
  user: userReducer,
});
