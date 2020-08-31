import React, { Component } from 'react'
import config from '../config'
import { connect } from 'react-redux'
import * as ACTIONS from '../store/actions/actions'

import axios from 'axios'

import Context from '../context/ProfileContext'

export class PendingRequest extends Component {

    static contextType = Context


    accept_request = (e) => {
        console.log('add',e.target.id)
    }

    decline_request = (e) => {
        console.log('decline',e.target.id)
    }

    render(){
        console.log('pending',this.props.pending_requests)
        return (
            <div>
                Pending friend Requests
                {this.props.pending_requests === null ?
                <h3>no friend requests</h3> :
                <ul>{this.props.pending_requests.map(user => (
                    <div key={user[1]}>
                        <li>{user[0]}</li>
                        <button id={user[1]} onClick={this.accept_request}>add</button>
                        <button id={user[1]} onClick={this.decline_request}>decline</button>
                   </div>
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
