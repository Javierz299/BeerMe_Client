import React, { Component } from 'react'
import history from './history'
import * as ACTIONS from '../store/actions/actions'

import axios from 'axios'
import config from '../config'

import { connect } from 'react-redux'
export class AuthCheck extends Component {

    send_profile_to_db = (profile)=> {
        let data = profile.profile
        console.log('data',data)
        axios.post(`${config.API_ENDPOINT}/post/userprofile`,data)      //,{params: {email: profile.profile.email}}
            .then(res => console.log('response from post request',res.config.data))
            // .then(() => axios.get(`${config.API_ENDPOINT}/get/userprofile`),{params: {email: profile.profile.email}})
            // .then(res => this.props.set_db_profile(res.data))
            //     .then(history.replace('/')  )  
            }


    componentDidMount(){
        console.log(this.props)

        if(this.props.auth.isAuthenticated()){
            console.log('isauthenticated: success')
            this.props.login_success()//redux props
            this.props.add_profile(this.props.auth.profile)//react props comming from routes.js
            this.send_profile_to_db(this.props.auth.profile)
            history.replace('/')
        } else {
            console.log('isauthenticated: failed')
            this.props.login_failure()
            this.props.remove_profile()
            history.replace('/')
        }
    }


    render() {
        return (
            <div>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log("authcheck",state.auth_reducer.profile)
    return {
        stateProfile: state.auth_reducer.profile
    }
}

function mapDispatchToProps(dispatch){
    return{
        login_success: () => dispatch(ACTIONS.login_success()),
        login_failure: () => dispatch(ACTIONS.login_failure()),
        add_profile: (profile) => dispatch(ACTIONS.add_profile(profile)),
        remove_profile: () => dispatch(ACTIONS.remove_profile()),
        set_db_profile: (profile) => dispatch(ACTIONS.set_db_profile(profile)),
        remove_db_profile: () => dispatch(ACTIONS.remove_db_profile())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AuthCheck)
