import React, { Component } from 'react'
import config from '../config'
import Context from '../context/ProfileContext'
import axios from 'axios'
import Loading from '../loading/loading'
import { connect } from 'react-redux'
import * as ACTIONS from '../store/actions/actions'

//import DrinkForm from '../container/DrinkForm'
import NextForm from '../container/NextForm/NextForm'
import ProfileDash from '../container/ProfileDash/ProfileDash'

class ProtectedRoute extends Component {
    static contextType = Context
    

refreshStats = () => {
    axios.get(`${config.API_ENDPOINT}/get/userdrink/${this.context.globalProfile.id}`)
            .then(res => this.context.dispatchStatsProfile(res.data))
            .then(() => this.props.set_profile_stats(this.context.globalStats))
}

    render(){
        return (
            <div id="profile-container" >
                <ProfileDash />

                {!this.context.globalStats ?
                    <Loading /> :
                <div id="profile-stats-container">
                    <div><span>Beer: {this.context.globalStats.beer}</span></div>
                    <div><span>Seltzer: {this.context.globalStats.seltzer}</span></div>
                    <div><span>Craft: {this.context.globalStats.craft_beer}</span></div>
                    <div><span>Wine: {this.context.globalStats.wine}</span></div>
                    <div><span>Shots: {this.context.globalStats.shots}</span></div>
                    <div><span>Mixed: {this.context.globalStats.cocktail}</span></div>
                    <div><button type="button" onClick={() => this.refreshStats()}>refresh stats</button></div>
                </div>
                }
                <NextForm />
        </div>
        )
    }
   
}

function mapDispatchToProps(dispatch){
    return {
        set_profile_stats: (profile) => dispatch(ACTIONS.set_profile_stats(profile)),
    }
}

export default connect(null,mapDispatchToProps)(ProtectedRoute)