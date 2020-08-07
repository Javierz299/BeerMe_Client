import React, { useState, useReducer } from 'react'
import './App.css'

import Context from './context/ProfileContext'

import * as ACTIONS from './store/actions/actions'
import AuthReducer from './store/actions/reducers/auth_reducer'

import Route from './routes/routes'

const App = () => {

  const [stateProfile,dispatchProfile] = useReducer(AuthReducer.AuthReducer,AuthReducer.initialState)





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
