import React, { Component } from 'react'
import { connect } from 'react-redux'
import config from '../config'
import auth0Client from '../utils/auth'

import axios from 'axios'
import { prettyDOM } from '@testing-library/react'

class ProtectedRoute extends Component {


componentDidMount(){
    console.log('from private',auth0Client.getProfile())
      let profile = auth0Client.getProfile()    
      let profileEmail = profile.email
      console.log('profileEmail',profileEmail)                          //,,{params: {email: profile.profile.email}}
    axios.get(`${config.API_ENDPOINT}/get/userprofile/${profileEmail}`)
      .then(res => console.log('get profile by email',res))
}

RenderProfile = (props) => (
    
    <div>
        {/* <h2>{this.props.profile.profile.name}</h2> */}
    </div>
)
    


    render(){
        return (
            <div>
            Welcome
            {/* {this.RenderProfile()} */}
        </div>
        )
    }
   
}

function mapStateToProps(state){
    return{
       profile: state.auth_reducer.profile
    }
}

export default connect(mapStateToProps)(ProtectedRoute)