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
               let lastPosted = res.data.date.slice(0,10)
               let timestamp = res.data.date.slice(11,16)
                console.log('lasted posted',lastPosted)
                console.log('timestamp',timestamp)
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
            <Link to="/friends">Friends</Link>
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
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(ProtectedRoute)