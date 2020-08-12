import React, { Component } from 'react'
import { connect } from 'react-redux'
import config from '../config'
import auth0Client from '../utils/auth'

import axios from 'axios'
import { prettyDOM } from '@testing-library/react'

class ProtectedRoute extends Component {


async componentDidMount(){
    console.log('from private',auth0Client.getProfile())
      let profile = await auth0Client.getProfile()    
      let profileEmail = await profile.email
      console.log('profileEmail',profileEmail)                          //,,{params: {email: profile.profile.email}}
    axios.get(`${config.API_ENDPOINT}/get/userprofile/${profileEmail}`)
      .then(res => this.RenderProfile(res.data.username))//console.log('get profile by email',res.data.username)
}

RenderProfile = (profileUsername) => (
    
    <div>
    {console.log('username',profileUsername)}
        <h2>{profileUsername}</h2>
    </div>
)
    


    render(){
        return (
            <div>
            Welcome
            {this.RenderProfile()}
        </div>
        )
    }
   
}

function mapStateToProps(state){
    return{
       
    }
}

export default connect(mapStateToProps)(ProtectedRoute)