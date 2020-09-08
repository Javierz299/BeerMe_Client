import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import auth0Client from '../utils/auth'


export class AuthLogin extends Component {


 signOut = () => {
     auth0Client.signOut()
     this.props.history.replace('/')
 }


    render() {
        return (
            <div id="log-container">
                <div>
               {
                 !auth0Client.isAuthenticated() &&
                 <button className="log-button" onClick={auth0Client.signIn}>Sign In/Up</button>
               }
               </div>
               <div>
               {
                 auth0Client.isAuthenticated() &&
                 <button className="log-button" onClick={() => this.signOut()}>Sign Out</button>
                }
                </div>
            </div>
        )
    }
}


export default withRouter(AuthLogin)
