import React, { Component } from 'react'

export class FriendsList extends Component {


    handleSearchFriend = (e) => {
        e.preventDefault()
        console.log('target',e.target)
        const { find_friend } = e.target
        console.log('find friend',find_friend.value)
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
