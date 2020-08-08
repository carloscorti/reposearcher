import { combineReducers } from 'redux';
import userReducer from './userReducer';
import welcomeReducer from './welcomeReducer';

export default combineReducers({
  user: userReducer,
  welcome: welcomeReducer,
});
