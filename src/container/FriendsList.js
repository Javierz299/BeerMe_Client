import React, { Component } from 'react'
import config from '../config'
import Following from '../container/Following'

import { connect } from 'react-redux'
import * as ACTIONS from '../store/actions/actions'

import Context from '../context/ProfileContext'

import axios from 'axios'

export class FriendsList extends Component {
    static contextType = Context

    friendRequest = (e) => {
        let friend = e.target.id

        let requestObj = {
            friend_id: Number(friend),
            user_id: this.context.globalProfile.id,
        }

        axios.post(`${config.API_ENDPOINT}/post/friendrequest`,requestObj)
            .then(res => res)


        this.props.friend_search(null)
    }

    
    handleSearchFriend = (e) => {
        e.preventDefault()
        const { find_friend } = e.target
        let friend_email = find_friend.value
        if(friend_email === ''){
            return
        }
        axios.get(`${config.API_ENDPOINT}/get/friendid/${friend_email}`,)
            .then(res => this.props.friend_search(res.data))

            find_friend.value = '';

    }

    render() {
        //make a conditional so you cant add yourself as a friend
        return (
            <div>
                <form onSubmit={this.handleSearchFriend}>
                    <div id="add-friend-box">
                        <input id="find_friend" type="text" placeholder="name123@email.com"/>
                        <button className="search-friend"type="submit">add</button>
                    </div>
                </form>
                <div>
                {this.props.friend === null ? <span></span> :
                this.props.friend.error === 'no friend id' ?
                <span>...no user with that email found. check spelling.</span> :
                <div>
                {this.props.friend.username}
                <button id={JSON.stringify(this.props.friend.id)} 
                        onClick={this.friendRequest}>
                    add friend
                </button>
                </div>
            }
                <div>
                    <Following />
                </div>
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
