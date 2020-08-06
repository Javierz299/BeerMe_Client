import React, { Component } from 'react'
import histroy from './history'
import * as ACTIONS from '../store/actions/actions'

import { connect } from 'react-redux'
export class AuthCheck extends Component {

    componentDidMount(){
        console.log(this.props)

        if(this.props.auth.isAuthenticated()){
            console.log('isauthenticated: success')
            this.props.login_success()
            //this.props.add_profile(this.auth.userProfile)
            histroy.replace('/')
        } else {
            console.log('isauntenticated: failed')
            this.props.login_failure()
            this.props.remove_profile()
            histroy.replace('/')
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
    console.log("authcheck",state)
    return {

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

export default connect(mapStateToProps,mapDispatchToProps)(AuthCheck)
