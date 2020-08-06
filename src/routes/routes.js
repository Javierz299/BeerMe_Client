import React, { Component } from 'react'

import Home from '../container/Home'

import AuthCheck from '../utils/authcheck'
import Callback from '../functional/Callback'
import ProtectedRoute from '../functional/ProtectedRoute'
import UnauthRedirect from '../functional/UnAuthRedirect'


import PrivateRoute from '../routes/PrivateRoute'

import history from '../utils/history'
//import handleAuthentication from '../utils/handleAuth'
import Auth from '../utils/auth'


import { Router, Route, Switch } from 'react-router'


const auth = new Auth()

const handleAuthentication = (props) => {
    if(props.location.hash){
        auth.handleAuth()
    }
}

export class routes extends Component {



    render() {
        return (
            <div>
                <Router history={history}>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path="/callback" render={(props) => { handleAuthentication(props); return <Callback />}} />
                        <Route path='/authcheck' render={() =>  <AuthCheck auth={auth}/>} />
                        <Route  path='/redirect' component={UnauthRedirect} />

                        <PrivateRoute path='/privateroute' auth={auth} component={ProtectedRoute} />
                    </Switch>

                </Router>
            </div>
        )
    }
}

export default routes
