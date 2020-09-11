import React, { Component } from 'react'
import { connect } from 'react-redux'
import config from '../config'
import * as ACTIONS from '../store/actions/actions'
import Context from '../context/ProfileContext'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Loading from '../loading/loading'

import DrinkForm from '../container/DrinkForm'

class ProtectedRoute extends Component {
    static contextType = Context
    
    componentDidMount(){

        this.context.globalProfile === null ?
            <Loading /> :
        axios.get(`${config.API_ENDPOINT}/get/userdrink/${this.context.globalProfile.id}`)
            .then(res => this.context.dispatchStatsProfile(res.data))
            .then(() => this.props.set_profile_stats(this.context.globalStats))
        axios.get(`${config.API_ENDPOINT}/get/lastestentry/${this.context.globalProfile.id}`)
              .then(res => {
                if(res.data.message){
                    return
                }               
                this.props.last_entry(res.data)
              })
        
    }

refreshStats = () => {
    axios.get(`${config.API_ENDPOINT}/get/userdrink/${this.context.globalProfile.id}`)
            .then(res => this.context.dispatchStatsProfile(res.data))
            .then(() => this.props.set_profile_stats(this.context.globalStats))
}

    render(){
        return (
            <div id="profile-container" >
                <div id="friends-link-container">
                    <div id="friends-link-box">
                    <div className="friends-link"><Link to="/friends">Friends</Link></div>
                    <div className="friends-link"><Link to="/pending">Requests</Link></div>
                    </div>
                    <div id="following-container">
                        <h3>Friends: {this.props.totalFriends}</h3>
                    </div>
                
                </div>
             {this.context.globalProfile === null ? 
                <Loading /> : 
            <div id="name-date-container">
                <h3>{this.context.globalProfile.username}</h3>
                <h5>Last Drink At: {this.props.entry === null ? null : this.props.entry.slice(0,8)}</h5>
                <h5>On: {this.props.entry === null ? null : this.props.entry.slice(9,20)}</h5>
            </div>
            }
                {this.context.globalStats === null ?
                    <Loading /> :
                <div id="profile-stats-container">
                    <div><span>Beer: {this.context.globalStats.beer}</span></div>
                    <div><span>Seltzer: {this.context.globalStats.seltzer}</span></div>
                    <div><span>Craft: {this.context.globalStats.craft_beer}</span></div>
                    <div><span>Wine: {this.context.globalStats.wine}</span></div>
                    <div><span>Shots: {this.context.globalStats.shots}</span></div>
                    <div><span>Mixed: {this.context.globalStats.cocktail}</span></div>
                    {/* <div><button type="button" onClick={() => this.refreshStats()}>r</button></div> */}
                </div>
                }
                
    
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