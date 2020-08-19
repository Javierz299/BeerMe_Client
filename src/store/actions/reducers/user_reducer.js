import * as ACTION_TYPES from '../../actions/action_types'


const initialState = {
    userProfile: null,
    beer: 0,
    wine: 0,
    shots: 0,
    cocktail: 0,
    submit: false

}

export default (state = initialState, action) => {
    switch(action.type){
        case ACTION_TYPES.INCREMENT_BEER:
            return {
            ...state,
            beer: action.payload,
        }
        case ACTION_TYPES.INCREMENT_WINE:
            return {
            ...state,
            wine: action.payload,
        }
        case ACTION_TYPES.INCREMENT_SHOTS:
            return {
                ...state,
                shots: action.payload,
            }
        case ACTION_TYPES.INCREMENT_COCKTAIL:
            return {
                ...state,
                cocktail: action.payload,
            }
            case ACTION_TYPES.DECREMENT_BEER:
            return {
            ...state,
            beer: action.payload,
        }
        case ACTION_TYPES.DECREMENT_WINE:
            return {
            ...state,
            wine: action.payload,
        }
        case ACTION_TYPES.DECREMENT_SHOTS:
            return {
                ...state,
                shots: action.payload,
            }
        case ACTION_TYPES.DECREMENT_COCKTAIL:
            return {
                ...state,
                cocktail: action.payload,
            }
        case ACTION_TYPES.SUBMIT_DRINK:
            return {
                ...state,
                submit: action.payload
            }
        default:
            return state
    }
}