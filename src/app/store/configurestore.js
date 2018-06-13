import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {routerMiddleware} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory';
import {reducer} from '../reducers/index';

const history = createHistory();
const middleware = routerMiddleware(history)

export const appStore = createStore(
    reducer,
    applyMiddleware(middleware)
    // compose(applyMiddleware(thunkMiddleware))
);
