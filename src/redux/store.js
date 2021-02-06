import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import AllReducers from './reducer/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeEnhancersMiddlewares = composeEnhancers(
  applyMiddleware(thunk, promiseMiddleware),
);
const Store = createStore(AllReducers, composeEnhancersMiddlewares);
export default Store;
