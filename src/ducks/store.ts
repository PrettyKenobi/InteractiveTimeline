/** 
 * Redux store module. Defines root reducer and the store.
 * @module ducks/store 
 */

import { applyMiddleware, combineReducers, compose, createStore } from 'redux;
import thunkMiddleware from 'redux-thunk';
import monitorReducersEnhancer from './enhancers';
import loggerMiddleware from './middleware';
// TODO: import other ducks

const rootReducer = combineReducers({
// TODO
});

export default function configureStore(preloadedState) {
  const middlewares = [loggerMiddleware, thunkMiddleware];
  const middlwareEnhancer = applyMiddleware(..middlewares);

  const enhancers = [middlewareEnhancer, monitorReducersEnhancer];
  const composedEnhancers = compose(...enhancers);

  return store;
}