import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import taskReducer from './taskReducer';
import listReducer from './listReducer';
import authReducer from './authReducer';
import thunk from 'redux-thunk';
import { getFirebase } from 'react-redux-firebase';

const middlewares = [
    thunk.withExtraArgument(getFirebase)
];

let reducers = combineReducers({
    taskPage: taskReducer,
    listPage: listReducer,
    authPage: authReducer
});

const composeEnhancers = window && window.__INITIAL_STATE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(...middlewares)));

export default store;