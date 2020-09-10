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
        let requestFrom = e.target.id
        let currentUser = {
            sent_request_to: this.context.globalProfile.id,
        }
        console.log('currentuser',currentUser)
        axios.patch(`${config.API_ENDPOINT}/patch/addfriend/${requestFrom}`,currentUser)

        let filtered = this.props.pending_requests.filter(user => user[1] != requestFrom)
        this.props.pending(filtered)
    }

    decline_request = (e) => {
        console.log('decline',e.target.id)
        let requestFrom = e.target.id
        let currentUser = {
            sent_request_to: this.context.globalProfile.id,
        }
        axios.patch(`${config.API_ENDPOINT}/patch/declinefriend/${requestFrom}`,currentUser)
            .then(res => console.log('patch',res))

        let filtered = this.props.pending_requests.filter(user => user[1] != requestFrom)
        this.props.pending(filtered)
    }

    render(){
        console.log('pending',this.props.pending_requests)
        return (
            <div id="pending-requests-container">
                <h2>Pending friend Requests</h2>
                {this.props.pending_requests === null ?
                <h3>no requests yet</h3> :
                <div>{[...this.props.pending_requests].map(user => (
                    <div className="request-box" key={user[1]}>
                        <li>{user[0]}</li>
                        <button id={user[1]} onClick={this.accept_request}>accept</button>
                        <button id={user[1]} onClick={this.decline_request}>decline</button>
                   </div>
                ))}</div>

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

function mapDispatchToProps(dispatch){
    return {
        pending: (pending) => dispatch(ACTIONS.pending_requests(pending))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PendingRequest)
