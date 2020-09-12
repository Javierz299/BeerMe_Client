import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as ACTIONS from '../store/actions/actions'

class TotalStats extends Component {

    show_friend_stats = (id) => {
        let friendId = id
        let friendStats = this.props.friends.find(friend => friend.id === friendId)
    
        this.props.show(friendStats)
        console.log("friendstats",friendStats)
        console.log('stats',this.props.friend_stats)
        this.props.friend_clicked_on()
    }

    render() {
        // let allfriends = this.props.friends[0]
        // let allentries = this.props.friends[1]
        // console.log('friends',allfriends)
        // console.log('allentries',allentries)
        let friendObj = []
        let len = this.props.friends[1].length
        let entries = this.props.friends[1]
        for(let i = 0; i < len; i++){
            let findEntry = this.props.friends[0].find(friend => friend.id === entries[i].user_id)
            friendObj.push({"frinend": findEntry, "entry": entries[i]})
        }

     
console.log('FRIENDOBJ',friendObj)
        return (
            <div>
                {this.props.friends === null ?
                <div id="no-friends-yet">no friends yet</div> :
                this.props.friends.map(friend => (
                    <div key={friend.id} 
                    id="friend-card"
                onClick={() => this.show_friend_stats(friend.id)}>
                    <div id="friend-name">
                        <li>{friend.username}</li>
                    </div>
                    {friend.last ? 
                        <div id="friend-time">
                            {console.log('friend time',friend.last)}
                            <small>Last Posted: {friend.last.slice(9,20)}</small>
                            <small> At: {friend.last.slice(0,9)}</small>
                        </div> : 
                            <li>never posted</li>
                    }
                <div id="friend-total">
                    <li>
                        Total Drinks: {friend.beer + friend.seltzer +
                            friend.craft_beer + friend.wine + 
                            friend.shots + friend.cocktail}
                    </li>
                </div>
                    </div>
                    ))
                }
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        friends: state.user_reducer.friendsList,
        friend_stats: state.user_reducer.show_friend_stats,
        friendClick: state.user_reducer.friend_click,
    }
}
function mapDispatchToProps(dispatch){
    return {
        show: (stats) => dispatch(ACTIONS.show_friend_stats(stats)),
        hide: () => dispatch(ACTIONS.hide_friend_stats()),
        friend_clicked_on: () => dispatch(ACTIONS.friend_click_on())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TotalStats)
