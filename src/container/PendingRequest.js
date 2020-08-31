import React, { Component } from 'react'
import config from '../config'
import { connect } from 'react-redux'
import * as ACTIONS from '../store/actions/actions'

import axios from 'axios'

import Context from '../context/ProfileContext'

export class PendingRequest extends Component {

    static contextType = Context

    RenderRequests = (friendRequest) => {
        if(friendRequest.length === 0){
            console.log('no pending requests')
        } else {
            console.log('requests',friendRequest)
        }
    }

    componentDidMount(){
        axios.get(`${config.API_ENDPOINT}/get/friendrequests/${this.context.globalProfile.id}`)
            .then(res => {
                console.log('res',res)
                let names = []
                res.data.forEach((user) => names.push(user[0].username))
               console.log('names',names)
            })
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

function mapStateToProps(state){
    return {

    }
}

function mapDispatchToProps(dispatch){
    return {
        pending: (pending) => dispatch(ACTIONS.pending_requests(pending))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PendingRequest)
