import * as ACTION_TYPES from '../actions/action_types'

export const signIn = (profile) => {
  return {
      type: ACTION_TYPES.SIGN_IN,
      payload: profile
  }
}

export const signOut = () => {
  return {
      type: ACTION_TYPES.SIGN_OUT
  }
}

export const success = () => {
  return {
    type: ACTION_TYPES.SUCCESS
  }
}

export const failure = () => {
  return {
    type: ACTION_TYPES.FAILURE
  }
}

export const user_input = (text) => {
  return {
    type: ACTION_TYPES.USER_INPUT,
    payload: text
  }
}


export const login_success = () => {
  return {
    type: ACTION_TYPES.LOGIN_SUCCESS
  }
}

export const login_failure = () => {
  return {
    type: ACTION_TYPES.LOGIN_FAILURE
  }
}


export const add_profile = (profile) => {
  return {
    type: ACTION_TYPES.ADD_PROFILE,
    payload: profile
  }
}

export const remove_profile = () => {
  return {
    type: ACTION_TYPES.REMOVE_PROFILE
  }
}

export const set_profile_stats = (stats) => {
  return{
      type: ACTION_TYPES.SET_PROFILE_STATS,
      payload: stats,
  }
}

export const remove_db_profile = () => {
  return{
      type: ACTION_TYPES.REMOVE_DB_PROFILE,
  }
}

export const auth_check = (authCheck) => {
  return { 
    type: ACTION_TYPES.AUTH_CHECK,
    payload: authCheck
  }
}

export const increment_beer = (beer) => {
  return {
    type: ACTION_TYPES.INCREMENT_BEER,
    payload: beer
  }
}

export const increment_seltzer = (seltzer) => {
  return {
    type: ACTION_TYPES.INCREMENT_SELTZER,
    payload: seltzer
  }
}

export const increment_craft = (craft) => {
  return {
    type: ACTION_TYPES.INCREMENT_CRAFT,
    payload: craft
  }
}

export const increment_wine = (wine) => {
  return {
    type: ACTION_TYPES.INCREMENT_WINE,
    payload: wine
  }
}

export const increment_shots = (shots) => {
  return {
    type: ACTION_TYPES.INCREMENT_SHOTS,
    payload: shots
  }
}

export const increment_cocktail = (cocktail) => {
  return {
    type: ACTION_TYPES.INCREMENT_COCKTAIL,
    payload: cocktail
  }
}

export const decrement_beer = (beer) => {
  return {
    type: ACTION_TYPES.INCREMENT_BEER,
    payload: beer
  }
}

export const decrement_seltzer = (seltzer) => {
  return {
    type: ACTION_TYPES.INCREMENT_SELTZER,
    payload: seltzer
  }
}

export const decrement_craft = (craft) => {
  return {
    type: ACTION_TYPES.INCREMENT_CRAFT,
    payload: craft
  }
}

export const decrement_wine = (wine) => {
  return {
    type: ACTION_TYPES.INCREMENT_WINE,
    payload: wine
  }
}

export const decrement_shots = (shots) => {
  return {
    type: ACTION_TYPES.INCREMENT_SHOTS,
    payload: shots
  }
}

export const decrement_cocktail = (cocktail) => {
  return {
    type: ACTION_TYPES.INCREMENT_COCKTAIL,
    payload: cocktail
  }
}

export const submit_drink = (submit) => {
  return {
    type: ACTION_TYPES.SUBMIT_DRINK,
    payload: submit
  }
}

export const friend_search = (friend) => {
  return {
    type: ACTION_TYPES.FRIEND_SEARCH,
    payload: friend
  }
}

export const pending_requests = (pending) => {
  return {
    type: ACTION_TYPES.PENDING_REQUESTS,
    payload: pending
  }
}

export const remove_from_pending = (id) => {
  return {
    type: ACTION_TYPES.REMOVE_FROM_PENDING,
    payload: id
  }
}

export const following = (following) => {
  return {
    type: ACTION_TYPES.FOLLOWING,
    payload: following
  }
}

export const show_friend_stats = (stats) => {
  return {
    type: ACTION_TYPES.SHOW_FRIEND_STATS,
    payload: stats
  }
}

export const hide_friend_stats = () => {
  return {
    type: ACTION_TYPES.HIDE_FRIEND_STATS
  }
}

export const total_friends = (total) => {
  return {
    type: ACTION_TYPES.TOTAL_FRIENDS,
    payload: total
  }
}

export const friend_click_on = () => {
  return {
    type: ACTION_TYPES.FRIEND_CLICK_ON,
  }
}

export const friend_click_off = () => {
  return {
    type: ACTION_TYPES.FRIEND_CLICK_OFF,
  }
}

export const last_entry = (entry) => {
  return {
    type: ACTION_TYPES.LAST_ENTRY,
    payload: entry
  }
}

export const friends_last_entry = (entry) => {
  return {
    type: ACTION_TYPES.LAST_ENTRY,
    payload: entry
  }
}

export const cumulative_drinks = (cumulative) => {
  return {
    type: ACTION_TYPES.CUMULATIVE_DRINKS,
    payload: cumulative
  }
}

export const cumulative_drinks_per = (user) => {
  return {
    type: ACTION_TYPES.CUMULATIVE_DRINKS_PER,
    payload: user
  }
}

export const get_cheers = (cheers) => {
  return {
    type: ACTION_TYPES.GET_CHEERS,
    payload: cheers
  }
}

export const cheers_img = () => {
  return {
    type: ACTION_TYPES.CHEERS_IMG,
  }
} 

export const cheers_names = (names) => {
  return {
    type: ACTION_TYPES.CHEERS_NAMES,
    payload: names,
  }
}