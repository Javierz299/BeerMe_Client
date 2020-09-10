import React, { Component } from 'react'
import config from '../config'

import Home from '../container/Home'
import Header from '../functional/Header'

import Callback from '../functional/Callback'
import ProtectedRoute from '../functional/ProtectedRoute'
import UnauthRedirect from '../functional/UnAuthRedirect'

import FriendsRoute from '../container/FriendsList'
import PendingRequest from '../container/PendingRequest'
import GlobalRanking from '../container/GlobalRanking'
import PrivateRoute from '../routes/PrivateRoute'

import history from '../utils/history'
import auth0Client from '../utils/auth'

import * as ACTIONS from '../store/actions/actions'
import { connect } from 'react-redux'

import { Router, Route, Switch } from 'react-router'

import Context from '../context/ProfileContext'
import axios from 'axios'
import PublicGraph from '../container/PublicGraph'


export class routes extends Component {

    static contextType = Context

    async componentDidMount(){    
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
                   let parsed = JSON.parse(res.config.data)
                    if(res.config.data){ 
                       axios.get(`${config.API_ENDPOINT}/get/userprofile/${parsed.email}`)
                        .then(res => this.context.dispatchGlobalProfile(res.data))
                    }
                })
                //data doesnt get stored into global fast enough
                //wait one second before trying to get global context. 
                setTimeout(() => {
                    axios.get(`${config.API_ENDPOINT}/get/userdrink/${this.context.globalProfile.id}`)
                    .then(res => this.context.dispatchStatsProfile(res.data))
                    .then(() => this.props.set_profile_stats(this.context.globalStats))
                },1000)
            
        }
    }

    render() {
        return (
            <div>
                <Router history={history}>
                <Header />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/redirect' component={UnauthRedirect} />
                        <Route path="/callback" render={(props) => <Callback  props={props}/>} />
                        <Route path="/public"  component={PublicGraph} />
                        <Route path="/ranking" component={GlobalRanking}/>

                        <PrivateRoute path='/pending' component={PendingRequest}/>
                        <PrivateRoute path='/privateroute'  component={ProtectedRoute} />
                        <PrivateRoute path='/friends' component={FriendsRoute} /> 
                    </Switch>

                </Router>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        profile: state.auth_reducer.profile,
        dbProfile: state.auth_reducer.set_db_profile,
        profileStats: state.user_reducer.profileStats
    }
}

function mapDispatchToProps(dispatch){
    return{
        add_profile: (profile) => dispatch(ACTIONS.add_profile(profile)),
        remove_profile: () => dispatch(ACTIONS.remove_profile()),
        set_profile_stats: (stats) => dispatch(ACTIONS.set_profile_stats(stats)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(routes)
