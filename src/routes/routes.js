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
import CheersRoute from '../functional/Cheers/Cheers'

import history from '../utils/history'
import auth0Client from '../utils/auth'

import * as ACTIONS from '../store/actions/actions'
import { connect } from 'react-redux'

import { Router, Route, Switch } from 'react-router'

import Context from '../context/ProfileContext'
import axios from 'axios'
import PublicGraph from '../container/PublicGraph'
import BeerTab from '../functional/RankingTab/BeerTab'
import SeltzerTab from '../functional/RankingTab/SeltzerTab'
import CraftTab from '../functional/RankingTab/CraftTab'
import WineTab from '../functional/RankingTab/WineTab'
import ShotsTab from '../functional/RankingTab/ShotsTab'
import MixedTab from '../functional/RankingTab/MixedTab'



export class routes extends Component {

    static contextType = Context

    async componentDidMount(){    
        try {
          await auth0Client.silentAuth();
          this.forceUpdate();
        } catch (err) {
          if (err.error !== 'login_required') console.log(err.error);
        }

        if(auth0Client.isAuthenticated()){
            let userProfile = auth0Client.getProfile()
            this.props.add_profile(userProfile)
             axios.post(`${config.API_ENDPOINT}/post/userprofile`,userProfile)
                .then(res => {
                   let parsed = JSON.parse(res.config.data)
                    if(res.config.data){ 
                       axios.get(`${config.API_ENDPOINT}/get/userprofile/${parsed.email}`)
                        .then(res => this.context.dispatchGlobalProfile(res.data))
                    }
                })
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
                        <Route path="/beerTab" component={BeerTab}/>
                        <Route path="/seltzerTab" component={SeltzerTab} />
                        <Route path="/craftTab" component={CraftTab} />
                        <Route path="/wineTab" component={WineTab} />
                        <Route path="/shotsTab" component={ShotsTab} />
                        <Route path="/MixedTab" component={MixedTab} />

                        <PrivateRoute path='/pending' component={PendingRequest}/>
                        <PrivateRoute path='/profile'  component={ProtectedRoute} />
                        <PrivateRoute path='/friends' component={FriendsRoute} /> 
                        <PrivateRoute path='/cheers' component={CheersRoute} /> 
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
