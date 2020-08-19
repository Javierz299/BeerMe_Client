import React, { Component } from 'react'
import { connect } from 'react-redux'
import config from '../config'
import * as ACTIONS from '../store/actions/actions'
import Context from '../context/ProfileContext'

import DrinkForm from '../container/DrinkForm'

class ProtectedRoute extends Component {
    static contextType = Context

async componentDidMount(){

}

    render(){
        console.log("globalstats",this.context.globalStats)
        console.log("locallstats",this.props.profileStats)

        return (
            <div>
            Welcome
            <h3> {this.context.globalProfile.username === null ? 
            this.props.profile.name : 
            this.context.globalProfile.username
            }</h3>
            <span>Beer: {this.context.globalStats.beer}</span>
            <span>Wine: {this.context.globalStats.wine}</span>
            <span>Shots: {this.context.globalStats.shots}</span>
            <span>Mixed: {this.context.globalStats.cocktail}</span>
    
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