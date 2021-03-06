import * as ACTION_TYPES from '../../actions/action_types'


const initialState = {
    is_authenticated: false,
    isSignedIn: false,
    profile: null,
    db_profile: null,
    authCheck: null,

}

const AuthReducer = (state = initialState, action) => {
    switch(action.type){
        case ACTION_TYPES.LOGIN_SUCCESS:
            return {
                ...state,
                is_authenticated: true,
                isSignedIn: true,
                profile: action.payload,
            }
        case ACTION_TYPES.LOGIN_FAILURE:
            return {
                ...state,
                is_authenticated: false,
                isSignedIn: false,
                profile: null
            }
        case ACTION_TYPES.ADD_PROFILE:
            return {
                ...state,
                profile: action.payload,
            }
        case ACTION_TYPES.REMOVE_PROFILE:
            return {
                ...state,
                profile: null
            }
        case ACTION_TYPES.AUTH_CHECK:
            return {
                ...state,
                authCheck: action.payload,
            }
        default:
            return state
    }
}

export default AuthReducer