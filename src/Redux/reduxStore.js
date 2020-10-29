import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import taskReducer from './taskReducer';
import listReducer from './listReducer';
import authReducer from './authReducer';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    taskPage: taskReducer,
    listPage: listReducer,
    authPage: authReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;