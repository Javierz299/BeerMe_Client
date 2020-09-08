import React, { Component } from 'react'
import { connect } from 'react-redux'
import config from '../config'
import * as ACTIONS from '../store/actions/actions'
import Context from '../context/ProfileContext'
import axios from 'axios'
import { Link } from 'react-router-dom'

import beerPic from '../Favorites/icons8-beer-50.png'
import seltzerPic from '../Favorites/icons8-sparkling-water-50.png'
import craftPic from '../Favorites/icons8-guinness-beer-50.png'
import winePic from '../Favorites/icons8-wine-glass-50.png'
import shotPic from '../Favorites/icons8-whiskey-50.png'
import mixedPic from '../Favorites/icons8-cocktail-50.png'

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
                console.log('last entry profile',res.data)
               
                this.props.last_entry(res.data)
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
                  console.log('friends following',res.data)
                  this.props.total_friends(res.data.length)
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
            <div>
                Friends: {this.props.totalFriends}
            
            <div>
                <span><Link to="/friends">Friends</Link></span>
                <span><Link to="/pending">Requests</Link></span>
            </div>
            
            </div>
             {this.context.globalProfile.username === null ? 
            this.props.profile.name : 
            <div>
                <h3>{this.context.globalProfile.username}</h3>
                <h5>Last Drink At: {this.props.entry === null ? null : this.props.entry.slice(0,9)}</h5>
                <h5>On: {this.props.entry === null ? null : this.props.entry.slice(9,20)}</h5>
            </div>
            }
            <div>
                <span>Beer: {this.context.globalStats.beer}</span>
                <span>Seltzer: {this.context.globalStats.seltzer}</span>
                <span>Craft: {this.context.globalStats.craft_beer}</span>
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
        profileStats: state.user_reducer.profileStats,
        totalFriends: state.user_reducer.total_friends,
        entry: state.user_reducer.last_entry,
    }
}
function mapDispatchToProps(dispatch){
    return{
        set_profile_stats: (profile) => dispatch(ACTIONS.set_profile_stats(profile)),
        pending: (pending) => dispatch(ACTIONS.pending_requests(pending)),
        friends: (following) => dispatch(ACTIONS.following(following)),
        total_friends: (total) => dispatch(ACTIONS.total_friends(total)),
        last_entry: (entry) => dispatch(ACTIONS.last_entry(entry)),
        friends_last_entry: (entry) => dispatch(ACTIONS.friends_last_entry(entry))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(ProtectedRoute)