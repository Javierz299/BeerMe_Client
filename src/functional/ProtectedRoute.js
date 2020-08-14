import React, { Component } from 'react'
import { connect } from 'react-redux'
import config from '../config'
import * as ACTIONS from '../store/actions/actions'
import Context from '../context/ProfileContext'

import DrinkForm from '../container/DrinkForm'
//import get all drinks

import auth0Client from '../utils/auth'

import axios from 'axios'

class ProtectedRoute extends Component {
    static contextType = Context

async componentDidMount(){
      //let profile = await auth0Client.getProfile()    
      //let profileEmail = await profile.email
    //  let result = axios.get(`${config.API_ENDPOINT}/get/userdrink/${this.context.globalProfile.id}`)
    //   .then(res => {
    //       console.log('get response',res.data)
    //       if(res.data === ""){
    //           console.log('no data, show form')
    //       } else {
    //           this.context.dispatchStatsProfile(res.data)
    //           console.log('found data dont show form')
    //           return <DrinkForm />
    //       }
      //})//console.log('get profile by email',res.data.username)
}

    render(){
        console.log(this.context.globalStats)
        return (
            <div>
            Welcome
            <h3> {this.context.globalProfile.username === null ? 
            this.props.profile.name : 
            this.context.globalProfile.username
            }</h3>
            
           {!this.props.globalStats === 'Empty' ? <div>Display results and edit</div> : <DrinkForm />}
           {/* {get request/list of all drinks user has submitted; total} */}
        </div>
        )
    }
   
}

function mapStateToProps(state){
    return {
        profile: state.auth_reducer.profile,
        dbProfile: state.auth_reducer.set_db_profile
    }
}
function mapDispatchToProps(dispatch){
    return{
        set_db_profile: (profile) => dispatch(ACTIONS.set_db_profile(profile)),
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(ProtectedRoute)