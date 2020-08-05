import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as ACTIONS from '../store/actions/actions'



export class GoogleAuth extends Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId:'525416829977-nogfqhecf77hrl3is75o2lvc5lluc1nt.apps.googleusercontent.com',
                scope: 'openid profile email'
            })
            .then(() => {
                this.auth = window.gapi.auth2.getAuthInstance()

                let profile = this.auth.currentUser.get().getBasicProfile()
                
                //let user = await {full_name: profile.getName(),email: profile.getEmail()}

                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange)
                console.log('ID: ' + profile.getId());
                console.log('Full Name: ' + profile.getName());
                console.log('Email: ' + profile.getEmail())
            })
        })
    }

    onSignInClick = () => {
        this.auth.signIn()
    }

    onSignOutClick = () => {
        this.auth.signOut()
    }

    renderAuthButton = () => {
        if(this.props.isSignedIn === null){
            return (
                <div>not sure if signed in</div>
            )
        } else {
            return this.props.isSignedIn ? 
            <button onClick={() => this.onSignOutClick()} >Sign Out</button> : 
            <button onClick={() => this.onSignInClick()} >Sing in</button>
        }
    }

    onAuthChange = (isSignedIn) => {
        return isSignedIn ? this.props.signIn(
            this.auth.currentUser.get()
        ) : this.props.signOut()
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
    console.log(state.auth_reducer)
    return {
       isSignedIn: state.auth_reducer.isSignedIn,
    }
}

function mapDispatchToProps(dispatch){
    return {
        signIn: (profile) => dispatch(ACTIONS.signIn(profile)),
        signOut: () => dispatch(ACTIONS.signOut()),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(GoogleAuth)
