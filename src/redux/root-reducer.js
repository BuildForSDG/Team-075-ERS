import { combineReducers } from 'redux';

import sendHelpReducer from './sendHelp/sendHelp-reducer';


export default combineReducers({
  help: sendHelpReducer
});
