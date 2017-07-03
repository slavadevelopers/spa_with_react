import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { HomeReducer } from './page/home/index'

export default combineReducers({
    routing: routerReducer,
    ...HomeReducer
});
