import AuthReducer from './auth_reducer'
import UserReducer from './user_reducer'
import { combineReducers } from 'redux'

 export default combineReducers({
    auth_reducer: AuthReducer,
    user_reducer: UserReducer,
})