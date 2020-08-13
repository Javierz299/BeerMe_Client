import React, { useState, useReducer } from 'react'
import './App.css'

import Context from './context/ProfileContext'

import * as ACTIONS from './store/actions/actions'
import * as ProfileHook from './store/actions/hooks/profile_hook'

import Route from './routes/routes'

const App = () => {
  const [profileGlobal, setProfileGlobal] = useState(null)

  const dispatchContextProfile = (profile) => {
    console.log('REACHED globalcontext',profile)
    setProfileGlobal(profile)
  }



  return (
    <div className="App">
      BeerMe
      <Context.Provider value={{
        globalProfile: profileGlobal,
        dispatchGlobalProfile: (profile) => dispatchContextProfile(profile),
      }}>
          <Route />
       </Context.Provider>
    </div>
  );
}

export default App;
