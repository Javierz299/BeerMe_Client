import React, { useState, useReducer } from 'react'
import './portfolio.css'
import './friends.css'
import './pending.css'
import './ranking.css'
import './home.css'

import Context from './context/ProfileContext'

import Route from './routes/routes'

const App = () => {
  const [profileGlobal, setProfileGlobal] = useState(null)
  const [statsGlobal, setStatsGlobal ] = useState(null)

  const dispatchContextProfile = (profile) => {
    console.log('REACHED globalcontext',profile)
    setProfileGlobal(profile)
  }

  const dispatchStatsProfile = (proStats) => {
    if(proStats === ''){
        setStatsGlobal('Empty')
    } else {
      console.log('proState reached',proStats)
      setStatsGlobal(proStats)
    }

  }

  return (
    <div className="App">
      <Context.Provider value={{
        globalProfile: profileGlobal,
        dispatchGlobalProfile: (profile) => dispatchContextProfile(profile),
        globalStats: statsGlobal,
        dispatchStatsProfile: (proStats) => dispatchStatsProfile(proStats),
      }}>
          <Route />
       </Context.Provider>
    </div>
  );
}

export default App;
