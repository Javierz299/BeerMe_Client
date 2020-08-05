import * as ACTION_TYPES from '../../actions/action_types'


const initialState = {
    is_authenticated: false,
    isSignedIn: false,
    userProfile: null,

}

export default (state = initialState, action) => {
    switch(action.type){
        case ACTION_TYPES.SIGN_IN:
            return {
                ...state,
                isSignedIn: true,
                userProfile: action.payload,
            }
        case ACTION_TYPES.SIGN_OUT:
            return {
                ...state,
                isSignedIn: false,
                userProfile: null
            }
        default:
            return state
    }
}