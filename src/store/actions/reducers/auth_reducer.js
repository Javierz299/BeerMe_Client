import * as ACTION_TYPES from '../../actions/action_types'


const initialState = {
    is_authenticated: false,
    isSignedIn: false,
    profile: null,

}

const AuthReducer = (state = initialState, action) => {
    switch(action.type){
        case ACTION_TYPES.SUCCESS:
            return {
                ...state,
                is_authenticated: true,
                isSignedIn: true,
                profile: action.payload,
            }
        case ACTION_TYPES.FAILURE:
            return {
                ...state,
                is_authenticated: false,
                isSignedIn: false,
                profile: null
            }
        default:
            return state
    }
}

export default AuthReducer