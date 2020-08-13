import React, { useState, useReducer } from 'react'
import './App.css'

import Context from './context/ProfileContext'

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
