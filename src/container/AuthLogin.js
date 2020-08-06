import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as ACTIONS from '../store/actions/actions'
import Auth from '../utils/auth'


export class AuthLogin extends Component {
   
    auth = new Auth()


    renderAuthButton = () => (
        <div>
         <button onClick={() => this.auth.login()} >Login</button>
        </div>
    )

    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        )
    }
}

function mapStateToProps(state){
    //console.log(state.auth_reducer)
    return {
      // isSignedIn: state.auth_reducer.isSignedIn,
    }
}

function mapDispatchToProps(dispatch){
    return {
        // signIn: (profile) => dispatch(ACTIONS.signIn(profile)),
        // signOut: () => dispatch(ACTIONS.signOut()),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AuthLogin)
