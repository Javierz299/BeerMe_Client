import React, { Component } from 'react'
import { connect } from 'react-redux'
import config from '../config'

import axios from 'axios'

class ProtectedRoute extends Component {

componentDidMount(){
    // let profile = this.props.profile.profile.email            //,,{params: {email: profile.profile.email}}
    // axios.get(`${config.API_ENDPOINT}/get/userprofile/${profile}`)
    //  .then(res => console.log('get profile',res))
}

RenderProfile = (props) => (
    
    <div>
        {/* <h2>{this.props.profile.profile.name}</h2> */}
    </div>
)
    


    render(){
        //console.log('protected context', this.context)
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