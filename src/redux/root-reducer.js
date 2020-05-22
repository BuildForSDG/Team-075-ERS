import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './user/user.reducer';
import sendHelpReducer from './sendHelp/sendHelp-reducer';


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'help']
};

const rootReducer = combineReducers({
  user: userReducer,
  help: sendHelpReducer
});

export default persistReducer(persistConfig, rootReducer);
