import React, { Component } from 'react'
import config from '../config'
import Context from '../context/ProfileContext'
import axios from 'axios'

import NextForm from '../container/NextForm/NextForm'
import NextStats from '../container/NextStats/NextStats'
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
                <NextStats />
                <NextForm />
        </div>
        )
    }
   
}

export default ProtectedRoute