import {combineReducers} from 'redux';
import userReducer from './reducerUser';
import activeUser from './reducerActiveUser';

const allReducer = combineReducers({
    users:userReducer,
    activeuser: activeUser
})

export default allReducer;