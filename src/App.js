import React, { useState, useReducer } from 'react'
import './App.css'

import Context from './context/ProfileContext'

import * as ACTIONS from './store/actions/actions'
import * as ProfileHook from './store/actions/hooks/profile_hook'

import Route from './routes/routes'

const App = () => {

  const [stateProfile,dispatchProfile] = useReducer(ProfileHook.ProfileHook, ProfileHook.initialState)





  return (
    <div className="App">
      BeerMe
      <Context.Provider value={{
        globalProfile: stateProfile,
      }}>
          <Route />
       </Context.Provider>
    </div>
  );
}

export default App;
