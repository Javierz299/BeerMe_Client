import React, { Component } from 'react'
import config from '../config'

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
            .then(res => console.log('get friend id',res.data))

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
                <h3>... no results</h3>
            </div>
        )
    }
}

export default FriendsList
