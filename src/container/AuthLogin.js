import React, { Component } from 'react'
import { connect } from 'react-redux'
import Auth from '../utils/auth'

import Context from '../context/ProfileContext'


export class AuthLogin extends Component {

    static contextType = Context

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
    console.log(state.auth_reducer.db_profile)

    return {
      is_authenticated: state.auth_reducer.is_authenticated,
      dbProfile: state.auth_reducer.db_profile
    }
}



export default connect(mapStateToProps)(AuthLogin)
