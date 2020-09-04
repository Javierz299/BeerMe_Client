import * as ACTION_TYPES from '../../actions/action_types'
import { last_entry } from '../actions'


const initialState = {
    profileStats: null,
    friendsList: null,
    friend_search: null,
    total_friends: null,
    show_friend_stats: null,
    pending_requests: null,
    last_entry: null,
    beer: 0,
    seltzer: 0,
    craft: 0,
    wine: 0,
    shots: 0,
    cocktail: 0,
    friend_click: false,
    submit: false

}

export default (state = initialState, action) => {
    switch(action.type){
        case ACTION_TYPES.SET_PROFILE_STATS:
            return{
                ...state,
                profileStats: action.payload
            }
        case ACTION_TYPES.INCREMENT_BEER:
            return {
            ...state,
            beer: action.payload,
        }
        case ACTION_TYPES.INCREMENT_SELTZER:
            return {
            ...state,
            seltzer: action.payload,
        }
        case ACTION_TYPES.INCREMENT_CRAFT:
            return {
            ...state,
            craft: action.payload,
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
        case ACTION_TYPES.SUBMIT_DRINK:
            return {
                ...state,
                submit: action.payload
            }
        case ACTION_TYPES.FRIEND_SEARCH:
            return {
                ...state,
                friend_search: action.payload
            }
        case ACTION_TYPES.PENDING_REQUESTS:
            return {
                ...state,
                pending_requests: action.payload,
            }
        case ACTION_TYPES.FOLLOWING:
            return {
                ...state,
                friendsList: action.payload,
            }
        case ACTION_TYPES.SHOW_FRIEND_STATS:
            return {
                ...state,
                show_friend_stats: action.payload
            }
        case ACTION_TYPES.HIDE_FRIEND_STATS:
            return {
                ...state,
                hide_friend_stats: null
            }
        case ACTION_TYPES.TOTAL_FRIENDS:
            return {
                ...state,
                total_friends: action.payload
            }
        case ACTION_TYPES.FRIEND_CLICK_ON:
            return {
                ...state,
                friend_click: true
            }
        case ACTION_TYPES.FRIEND_CLICK_OFF:
                return {
                    ...state,
                    friend_click: false
                }
        case ACTION_TYPES.LAST_ENTRY:
            return {
                ...state,
                last_entry: action.payload
            }
        default:
            return state
    }
}