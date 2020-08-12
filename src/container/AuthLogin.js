import React, { Component } from 'react'
import { connect } from 'react-redux'
import auth0Client from '../utils/auth'

import Context from '../context/ProfileContext'


export class AuthLogin extends Component {

 signOut = () => {
     auth0Client.signOut()
     this.props.history.replace('/')
 }

 renderButtons = () =>{
     console.log('button clicked')
     return !auth0Client.isAuthenticated ?
     <button onClick={() => auth0Client.signOut()}>Sign Out</button> :
     <button onClick={() => auth0Client.signIn()}>Sign In</button>
 }

    render() {
        return (
            <div>
               {this.renderButtons()}
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(state.auth_reducer.is_authenticated)
    console.log(state.auth_reducer.db_profile)

    return {
      is_authenticated: state.auth_reducer.is_authenticated,
      dbProfile: state.auth_reducer.db_profile
    }
}



export default connect(mapStateToProps)(AuthLogin)
