import thunk from 'redux-thunk';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import commentsReducer from './comments';
import profileReducer from './profile';

const rootReducer = combineReducers({commentsReducer, profileReducer});
const middleware = applyMiddleware(thunk);
const Store = createStore(rootReducer,middleware);

export default Store;