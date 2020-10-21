import React, { Component } from 'react'
import Context from '../../context/ProfileContext'
import Loading from '../../loading/loading'
import * as ACTIONS from '../../store/actions/actions'

import { connect } from 'react-redux'

class NextStats extends Component{
    static contextType = Context

render(){
    return (
        <div>
            {!this.context.globalStats ?
                    <Loading /> :
                <div id="profile-stats-container">
                    <div><span>Beer: {this.context.globalStats.beer}</span></div>
                    <div><span>Seltzer: {this.context.globalStats.seltzer}</span></div>
                    <div><span>Craft: {this.context.globalStats.craft_beer}</span></div>
                    <div><span>Wine: {this.context.globalStats.wine}</span></div>
                    <div><span>Shots: {this.context.globalStats.shots}</span></div>
                    <div><span>Mixed: {this.context.globalStats.cocktail}</span></div>
                </div>
                }
        </div>
    )
  }
}

function mapDispatchToProps(dispatch){
    return {
        set_profile_stats: (profile) => dispatch(ACTIONS.set_profile_stats(profile)),
    }
}

export default connect(null,mapDispatchToProps)(NextStats)