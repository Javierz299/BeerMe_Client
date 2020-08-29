import React, { Component } from 'react'
import config from '../config'

import axios from 'axios'

import Context from '../context/ProfileContext'

export class PendingRequest extends Component {

    static contextType = Context

    RenderRequests = (friendRequest) => {
        if(friendRequest.message){
            console.log(friendRequest.message)
        } else {
            console.log('requests',friendRequest)
            console.log('filtered',friendRequest.filter(item => item.accepted === null && item.declined === null))
        }
    }

    componentDidMount(){
        axios.get(`${config.API_ENDPOINT}/get/friendrequests/${this.context.globalProfile.id}`)
            .then(res => this.RenderRequests(res.data))
    }

//if user declines request patch that request from db
//so user who initiated the request can make a request again

    render(){
        return (
            <div>
                Pending friend Requests
            </div>
        )
    }
}

export default PendingRequest
