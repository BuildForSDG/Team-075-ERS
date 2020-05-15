import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './root-reducer';

const middleWares = [thunk];

if (process.env.NODE_ENV === 'development') {
  middleWares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middleWares));

export default store;
