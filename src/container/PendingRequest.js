import React, { Component } from 'react'
import config from '../config'
import { connect } from 'react-redux'
import * as ACTIONS from '../store/actions/actions'

import axios from 'axios'

import Context from '../context/ProfileContext'

export class PendingRequest extends Component {

    static contextType = Context


//if user declines request patch that request from db
//so user who initiated the request can make a request again

    render(){
        console.log('pending',this.props.pending_requests)
        return (
            <div>
                Pending friend Requests
                {this.props.pending_requests === null ?
                <h3>no friend requests</h3> :
                <ul>{this.props.pending_requests.map(user => (
                   <li key={user[1]}>{user[0]}</li>
                ))}</ul>

                }
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        pending_requests: state.user_reducer.pending_requests,
    }
}

export default connect(mapStateToProps)(PendingRequest)
