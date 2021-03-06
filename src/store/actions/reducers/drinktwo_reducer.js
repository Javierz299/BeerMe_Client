import * as ACTION_TYPES from '../../actions/action_types'

const initialState = {
    profileStatsTwo: null,
    duce: 0,
    eight_n_up: 0,
    beer_bong: 0,
    shotgun: 0,
    wine_flight: 0,
    beer_flight: 0,
    submit_drink_two: false,
}

export default (state = initialState, action) => {
    switch(action.type){
        case ACTION_TYPES.SET_PROFILE_STATS_TWO:
            return{
                ...state,
                profileStatsTwo: action.payload
            }
        case ACTION_TYPES.INCREMENT_DUCE:
            return {
            ...state,
            duce: action.payload,
        }
        case ACTION_TYPES.INCREMENT_EIGHT_N_UP:
            return {
            ...state,
            eight_n_up: action.payload,
        }
        case ACTION_TYPES.INCREMENT_BEER_BONG:
            return {
            ...state,
            beer_bong: action.payload,
        }
        case ACTION_TYPES.INCREMENT_SHOTGUN:
            return {
            ...state,
            shotgun: action.payload,
        }
        case ACTION_TYPES.INCREMENT_WINE_FLIGHT:
            return {
                ...state,
                wine_flight: action.payload,
            }
        case ACTION_TYPES.INCREMENT_BEER_FLIGHT:
            return {
                ...state,
                beer_flight: action.payload,
            }
        case ACTION_TYPES.SUBMIT_DRINK_TWO:
            return {
                ...state,
                submit_drink_two: action.payload
            }
        default:
            return state
    }
}