import { combineReducers } from 'redux';
import users from './Users/reducer';

const rootReducer = combineReducers({
    users,
});

export default rootReducer;
