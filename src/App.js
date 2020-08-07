import React, { useState, useReducer } from 'react'
import './App.css'

import Context from './context/ProfileContext'

import * as ACTIONS from './store/actions/actions'
import * as ProfileHook from './store/actions/hooks/profile_hook'

import Route from './routes/routes'

const App = () => {

  const [stateProfile,dispatchProfile] = useReducer(ProfileHook.ProfileHook, ProfileHook.initialState)

  const dispatchContextProfile = (profile) => {
    console.log('globalcontext',profile)
    dispatchProfile(ACTIONS.add_profile(profile))
  }



  return (
    <div className="App">
      BeerMe
      <Context.Provider value={{
        globalProfile: stateProfile,
        globalDispatchProfile: (profile) => dispatchContextProfile(profile),
      }}>
          <Route />
       </Context.Provider>
    </div>
  );
}

export default App;
