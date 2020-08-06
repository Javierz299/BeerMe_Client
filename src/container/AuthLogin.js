import React, { Component } from 'react'
import { connect } from 'react-redux'
import Auth from '../utils/auth'


export class AuthLogin extends Component {
   
    auth = new Auth()


    renderAuthButton = () => {
        return this.props.is_authenticated ?
        <button onClick={() => this.auth.logout()} >Logout</button> :
        <button onClick={() => this.auth.login()} >LOGIN</button>

}

    render() {
        return (
            <div>
               {this.renderAuthButton()}
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(state.auth_reducer.is_authenticated)
    return {
      is_authenticated: state.auth_reducer.is_authenticated,
    }
}

function mapDispatchToProps(dispatch){
    return {
        // signIn: (profile) => dispatch(ACTIONS.signIn(profile)),
        // signOut: () => dispatch(ACTIONS.signOut()),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AuthLogin)
