import React, { Component } from 'react'
import config from '../config'

import { connect } from 'react-redux'
import * as ACTIONS from '../store/actions/actions'

import Context from '../context/ProfileContext'

import axios from 'axios'

export class FriendsList extends Component {

    static contextType = Context
    handleSearchFriend = (e) => {
        e.preventDefault()
        console.log('target',e.target)
        const { find_friend } = e.target
        let friend_email = find_friend.value
        
        console.log(friend_email)        
        axios.get(`${config.API_ENDPOINT}/get/friendid/${friend_email}`,)
            .then(res => this.props.friend_search(res.data))

    }

    render() {
        //make a conditional so you cant add yourself as a friend
        return (
            <div>
                friends list
                <form onSubmit={this.handleSearchFriend}>
                    <input id="find_friend" type="text" placeholder="name123@email.com"/>
                    <button type="submit" >search</button>
                </form>
                <div>
                {this.props.friend === null || this.props.friend.error === 'no friend id' ? 
                <span>...no result found</span> :
                <div>
                {this.props.friend.username}
                <button onClick={() => console.log('add friend button')}>add friend</button>
                </div>
            }
                </div>
            </div>
        )
    }
}
function mapStatToProps(state){
    return {
        friend: state.user_reducer.friend_search
    }
}

function mapDispatchToProps(dispatch){
    return {
        friend_search: (friend) => dispatch(ACTIONS.friend_search(friend))
    }
}

export default connect(mapStatToProps,mapDispatchToProps)(FriendsList)
