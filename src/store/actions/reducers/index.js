import AuthReducer from './auth_reducer'
import UserReducer from './user_reducer'
import CheersReducer from './cheers_reducer'
import DrinkTwoReducer from './drinktwo_reducer'
import { combineReducers } from 'redux'

 export default combineReducers({
    auth_reducer: AuthReducer,
    user_reducer: UserReducer,
    cheers_reducer: CheersReducer,
    drinktwo_reducer: DrinkTwoReducer, 
})