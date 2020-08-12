import React, { Component } from 'react'
import config from '../config'

import Home from '../container/Home'
import Header from '../functional/Header'

import Callback from '../functional/Callback'
import ProtectedRoute from '../functional/ProtectedRoute'
import UnauthRedirect from '../functional/UnAuthRedirect'

import PrivateRoute from '../routes/PrivateRoute'

import AuthCheck from '../utils/authcheck'
import history from '../utils/history'
import auth0Client from '../utils/auth'

import * as ACTIONS from '../store/actions/actions'
import { connect } from 'react-redux'

import { Router, Route, Switch } from 'react-router'

import Context from '../context/ProfileContext'
import axios from 'axios'


export class routes extends Component {

    async componentDidMount(){    
        //console.log('props from routes',props)    
        //if (this.location.pathname === '/callback') return;
        try {
          await auth0Client.silentAuth();
          this.forceUpdate();
        } catch (err) {
          if (err.error !== 'login_required') console.log(err.error);
        }

        if(auth0Client.isAuthenticated()){
            let userProfile = auth0Client.getProfile()
            axios.post(`${config.API_ENDPOINT}/post/userprofile`,userProfile)
                .then(res => console.log('post res', res))
        }
    }

    render() {
        return (
            <div>
                <Router history={history}>
                <Header />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/authcheck' render={() =>  <AuthCheck />} />
                        <Route path='/redirect' component={UnauthRedirect} />
                        <Route path="/callback" render={(props) => <Callback  props={props}/>} />

                        <PrivateRoute path='/privateroute'  component={ProtectedRoute} />
                    </Switch>

                </Router>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log('auth reducer/state',state.auth_reducer.profile)
    return {
        profile: state.auth_reducer.profile,
        dbProfile: state.auth_reducer.set_db_profile
    }
}

function mapDispatchToProps(dispatch){
    return{
        set_auth: (authCheck) => dispatch(ACTIONS.auth_check),
        login_success: () => dispatch(ACTIONS.login_success()),
        login_failure: () => dispatch(ACTIONS.login_failure()),
        add_profile: (profile) => dispatch(ACTIONS.add_profile(profile)),
        remove_profile: () => dispatch(ACTIONS.remove_profile()),
        set_db_profile: (profile) => dispatch(ACTIONS.set_db_profile(profile)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(routes)
