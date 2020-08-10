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

    // DateFormat = () => {
    //     const d = new Date(),
    //     month = '' + (d.getMonth() + 1),
    //     day = '' + d.getDate(),
    //     year = d.getFullYear();

    // if (month.length < 2) 
    //     month = '0' + month;
    // if (day.length < 2) 
    //     day = '0' + day;

    // return [year, month, day].join('-');
    // }

    componentDidMount(){        

        console.log('mounted')
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
        console.log('rendered from routes',this.context)
        console.log(this.context.globalProfile)
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
    return {
        profile: state.auth_reducer.profile
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

export default connect(mapStateToProps, mapDispatchToProps)(routes)
