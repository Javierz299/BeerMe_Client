import * as ACTION_TYPES from '../../actions/action_types'


export const initialState = {
    profile: null,
}

export const ProfileHook = (state = initialState, action) => {
    switch(action.type){
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
        default:
            return state
    }
}

