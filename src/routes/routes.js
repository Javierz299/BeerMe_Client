import React, { Component } from 'react'

import Home from '../container/Home'
import Header from '../functional/Header'

import Callback from '../functional/Callback'
import ProtectedRoute from '../functional/ProtectedRoute'
import UnauthRedirect from '../functional/UnAuthRedirect'

import PrivateRoute from '../routes/PrivateRoute'

import AuthCheck from '../utils/authcheck'
import history from '../utils/history'
import Auth from '../utils/auth'

import * as ACTIONS from '../store/actions/actions'
import { connect } from 'react-redux'

import { Router, Route, Switch } from 'react-router'


const auth = new Auth()

const handleAuthentication = (props) => {
    if(props.location.hash){
        auth.handleAuth()
    }
}

export class routes extends Component {

    componentDidMount(){
        if(auth.isAuthenticated()){
            console.log('isauthenticated: success')
            this.props.login_success()//redux props
            this.props.add_profile(auth.userProfile)//react props comming from routes.js
        } else {
            console.log('isauthenticated: failed')
            this.props.login_failure()
            this.props.remove_profile()
        }
    }


    render() {
        return (
            <div>
                <Router history={history}>
                <Header />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/authcheck' render={() =>  <AuthCheck auth={auth}/>} />
                        <Route path='/redirect' component={UnauthRedirect} />
                        <Route path="/callback" render={(props) => { handleAuthentication(props); return <Callback />}} />

                        <PrivateRoute path='/privateroute' auth={auth} component={ProtectedRoute} />
                    </Switch>

                </Router>
            </div>
        )
    }
}
function mapDispatchToProps(dispatch){
    return{
        login_success: () => dispatch(ACTIONS.login_success()),
        login_failure: () => dispatch(ACTIONS.login_failure()),
        add_profile: (profile) => dispatch(ACTIONS.add_profile(profile)),
        remove_profile: () => dispatch(ACTIONS.remove_profile())
    }
}

export default connect(null, mapDispatchToProps)(routes)
