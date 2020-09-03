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

export const show_friend_stats = () => {
  return {
    type: ACTION_TYPES.SHOW_FRIEND_STATS
  }
}

export const hide_friend_stats = () => {
  return {
    type: ACTION_TYPES.HIDE_FRIEND_STATS
  }
}
