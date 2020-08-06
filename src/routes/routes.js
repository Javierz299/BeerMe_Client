import React, { Component } from 'react'

import Home from '../container/Home'
import Callback from '../functional/Callback'

import history from '../utils/history'
import handleAuthentication from '../utils/handleAuth'

import { Router, Route, Switch } from 'react-router'


export class routes extends Component {



    render() {
        return (
            <div>
                <Router history={history}>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/callback' render={(props) => {handleAuthentication(props); return <Callback />}} />
                    </Switch>

                </Router>
            </div>
        )
    }
}

export default routes
