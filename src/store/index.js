import { createStore, compose, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import reducers from './../reducers';

const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

export const store = createStore(reducers, 
  composeEnhacers(applyMiddleware(() => promiseMiddleware)));