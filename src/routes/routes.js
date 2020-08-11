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
import Auth from '../utils/auth'

import * as ACTIONS from '../store/actions/actions'
import { connect } from 'react-redux'

import { Router, Route, Switch } from 'react-router'

import Context from '../context/ProfileContext'
import axios from 'axios'


const auth = new Auth()

const handleAuthentication = (props) => {
    if(props.location.hash){
        auth.handleAuth()
    }
}

export class routes extends Component {

    static contextType = Context

    componentDidMount(){        
       // let profile = auth.userProfile.profile.profile
        console.log('mounted',auth)
        if(auth.isAuthenticated()){
            console.log('isauthenticated: success')
            this.props.login_success()//redux props
            this.props.add_profile(auth.userProfile)//react props comming from routes.js

            // let profile = auth.userProfile.profile.email 
            // console.log('profile from routes',profile)
            // axios.get(`${config.API_ENDPOINT}/get/userprofile/${profile}`)
            //     .then(res => console.log('get profile',res))
        } else {
            console.log('isauthenticated: failed')
            this.props.login_failure()
            this.props.remove_profile()
        }
       
        auth.silentAuth()
        this.forceUpdate()
        
    }




    render() {
        console.log('database profile',this.props.dbProfile)
        console.log("routes",auth)
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

function mapStateToProps(state){
    console.log(state.auth_reducer.dbProfile)
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
