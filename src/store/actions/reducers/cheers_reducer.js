import * as ACTIONS_TYPES from '../action_types'

const initialState = {
    cheers: null,
    cheers_img: false,
    cheers_names: null,
}

export default (state = initialState, actions) => {
    switch(actions.type){
        case ACTIONS_TYPES.GET_CHEERS:
            return {
                ...state,
                cheers: actions.payload
            }
        case ACTIONS_TYPES.CHEERS_IMG:
            return {
                ...state,
                cheers_img: !state.cheers_img
            }
        case ACTIONS_TYPES.CHEERS_NAMES:
            return {
                ...state,
                cheers_names: actions.payload,
            }
        default:
            return state
    }
}