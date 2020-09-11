import React, { Component } from 'react'
import config from '../config'
import { connect } from 'react-redux'
import * as ACTIONS from '../store/actions/actions'

import axios from 'axios'

import Context from '../context/ProfileContext'

export class PendingRequest extends Component {

    static contextType = Context

    componentDidMount(){
        axios.get(`${config.API_ENDPOINT}/get/friendrequests/${this.context.globalProfile.id}`)
              .then(res => {
                  if(res.data.message){
                      return
                  }
                  let names = []
                  res.data.forEach((user) => names.push([user[0].username,user[1]]))
                 this.props.pending(names)
              })
    }


    accept_request = (e) => {
        let requestFrom = e.target.id
        let currentUser = {
            sent_request_to: this.context.globalProfile.id,
        }
        axios.patch(`${config.API_ENDPOINT}/patch/addfriend/${requestFrom}`,currentUser)

        let filtered = this.props.pending_requests.filter(user => user[1] !== Number(requestFrom))
        this.props.pending(filtered)
    }

    decline_request = (e) => {
        let requestFrom = e.target.id
        let currentUser = {
            sent_request_to: this.context.globalProfile.id,
        }
        axios.patch(`${config.API_ENDPOINT}/patch/declinefriend/${requestFrom}`,currentUser)
            .then(res => res)

        let filtered = this.props.pending_requests.filter(user => user[1] !== Number(requestFrom))
        this.props.pending(filtered)
    }

    render(){
        return (
            <div>
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
