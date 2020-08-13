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

    static contextType = Context

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
            this.props.add_profile(userProfile)
            console.log('post/get,',userProfile.email)
            axios.post(`${config.API_ENDPOINT}/post/userprofile`,userProfile)
                .then(res => {
                    //console.log('post res',res)
                   let parsed = JSON.parse(res.config.data)
                    //console.log('res data',parsed.email)
                    if(res.config.data){
                        axios.get(`${config.API_ENDPOINT}/get/userprofile/${parsed.email}`)
                        .then(res => this.context.dispatchGlobalProfile(res.data))
                    }
                })
                //this.props.set_db_profile(JSON.parse(res.config.data))
                //console.log('post res', JSON.parse(res.config.data))
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
    return {
        profile: state.auth_reducer.profile,
        dbProfile: state.auth_reducer.set_db_profile
    }
}

function mapDispatchToProps(dispatch){
    return{
        add_profile: (profile) => dispatch(ACTIONS.add_profile(profile)),
        remove_profile: () => dispatch(ACTIONS.remove_profile()),
        set_db_profile: (profile) => dispatch(ACTIONS.set_db_profile(profile)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(routes)
