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

        console.log(this.context.globalProfile)
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



export default connect(mapStateToProps)(AuthLogin)
