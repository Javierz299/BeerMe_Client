import React, { Component } from 'react'
import { connect } from 'react-redux'
import config from '../config'
import * as ACTIONS from '../store/actions/actions'
import Context from '../context/ProfileContext'
import axios from 'axios'
import { Link } from 'react-router-dom'

import DrinkForm from '../container/DrinkForm'

class ProtectedRoute extends Component {
    static contextType = Context

     
    componentDidMount(){
        axios.get(`${config.API_ENDPOINT}/get/lastestentry/${this.context.globalProfile.id}`)
              .then(res => {
                console.log('last entry',res.data)
                if(res.data.message){
                    console.log("empty array")
                    return
                }
               let lastPosted = res.data.date.slice(0,10)
               let timestamp = res.data.date.slice(11,16)
                console.log('lasted posted',lastPosted)
                console.log('timestamp',timestamp)
              })
        
        axios.get(`${config.API_ENDPOINT}/get/friendrequests/${this.context.globalProfile.id}`)
              .then(res => {
                  console.log('res',res)
                  let names = []
                  res.data.forEach((user) => names.push([user[0].username,user[1]]))
                 this.props.pending(names)
              })

        axios.get(`${config.API_ENDPOINT}/get/following/${this.context.globalProfile.id}`)
              .then(res => {
                  if(res.data.length === 0){
                      console.log("empty array, no friends have accepted")
                      return
                  }
                  console.log('friends following',res)
                  this.props.friends(res.data)
                  
              })
    }

refreshStats = () => {
    axios.get(`${config.API_ENDPOINT}/get/userdrink/${this.context.globalProfile.id}`)
            .then(res => this.context.dispatchStatsProfile(res.data))
            .then(() => this.props.set_profile_stats(this.context.globalStats))
}

    render(){
        return (
            <div>
            {/* {render compnent that returns below} */}
            <div>
            following: 0, followers: 0
            <h3>
            <div>
            <span><Link to="/friends">Friends</Link></span>
            <span><Link to="/pending">Requests</Link></span>
            </div>
            </h3>
            </div>
            <h3> {this.context.globalProfile.username === null ? 
            this.props.profile.name : 
            this.context.globalProfile.username
            }</h3>
            <div>
            <span>Beer: {this.context.globalStats.beer}</span>
            <span>Wine: {this.context.globalStats.wine}</span>
            <span>Shots: {this.context.globalStats.shots}</span>
            <span>Mixed: {this.context.globalStats.cocktail}</span>
            <button type="button" onClick={() => this.refreshStats()}>refresh</button>
            </div>
    
           {<DrinkForm />}
        </div>
        )
    }
   
}

function mapStateToProps(state){
    return {
        profile: state.auth_reducer.profile,
        profileStats: state.user_reducer.profileStats
    }
}
function mapDispatchToProps(dispatch){
    return{
        set_profile_stats: (profile) => dispatch(ACTIONS.set_profile_stats(profile)),
        pending: (pending) => dispatch(ACTIONS.pending_requests(pending)),
        friends: (following) => dispatch(ACTIONS.following(following)),
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(ProtectedRoute)