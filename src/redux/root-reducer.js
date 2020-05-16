import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import sendHelpReducer from './sendHelp/sendHelp-reducer';


export default combineReducers({
  user: userReducer,
  help: sendHelpReducer
});
