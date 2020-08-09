import { combineReducers } from 'redux';
import reposReducer from './reposReducer';
import welcomeReducer from './welcomeReducer';
import searchTermReducer from './searchTermReducer';

export default combineReducers({
  search: searchTermReducer,
  repos: reposReducer,
  welcome: welcomeReducer,
});
