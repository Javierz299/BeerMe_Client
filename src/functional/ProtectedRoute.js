import React, { Component } from 'react'
import config from '../config'
import Context from '../context/ProfileContext'
import axios from 'axios'

import * as ACTIONS from '../store/actions/actions'

import NextForm from '../container/NextForm/NextForm'
import NextStats from '../container/NextStats/NextStats'
import ProfileDash from '../container/ProfileDash/ProfileDash'

import { connect } from 'react-redux'

class ProtectedRoute extends Component {
    static contextType = Context

    componentDidMount(){
        console.log('second form mounted')
        const BeerMeTwo = {
            user_id: this.context.globalProfile.id,
            duce: 0,
            eight_n_up: 0,
            beer_bong: 0,
            shotgun: 0,
            wine_flight: 0,
            beer_flight: 0,
        }

        if(this.props.profileStatsTwo === null || this.props.profileStatsTwo === ""){
            axios.post(`${config.API_ENDPOINT}/post/userDrinkTwo`,BeerMeTwo)
            .then(res => res)
        } 
            setTimeout(() => {
                axios.get(`${config.API_ENDPOINT}/get/userDrinkTwo/${this.context.globalProfile.id}`)
                .then(res => this.props.setProfileStatsTwo(res.data))
            },400)

     }
    

refreshStats = () => {
    axios.get(`${config.API_ENDPOINT}/get/userdrink/${this.context.globalProfile.id}`)
            .then(res => this.context.dispatchStatsProfile(res.data))
            .then(() => this.props.set_profile_stats(this.context.globalStats))
}

    render(){
        return (
            <div id="profile-container" >
                <ProfileDash />
                <NextStats />
                <NextForm />
        </div>
        )
    }
   
}

function mapStateToProps(state){
    return {
        profileStatsTwo: state.drinktwo_reducer.profileStatsTwo
    }
}

function mapDispatchToProps(dispatch){
    return {
        setProfileStatsTwo: (stats) => dispatch(ACTIONS.set_profile_stats_two(stats)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProtectedRoute)