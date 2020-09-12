import React, { Component } from 'react'
import { connect } from 'react-redux'
import { convertTime, convertDate } from '../utils/date'

import * as ACTIONS from '../store/actions/actions'

class TotalStats extends Component {

    show_friend_stats = (id) => {
        let friendId = id

        let filtered = []
        let len = this.props.friends.length
        for(let i = 0; i < len; i++){
            let findfriend = this.props.friends.find(friend => friend.friend.id === friendId)
            console.log('findfriend',findfriend)
            filtered.push(findfriend)
        }
        //let friendStats = this.props.friends[0].find(friend => friend.friend.id === friendId)
        console.log("filtered",filtered)
        this.props.show(filtered)
        // console.log("friendstats",friendStats)
        // console.log('stats',this.props.friend_stats)
        this.props.friend_clicked_on()
    }

    render() {
        return (
            <div>
                {this.props.friends === null ?
                <div id="no-friends-yet">no friends yet</div> :
                this.props.friends.map(friend => (
                    <div key={friend.friend.id} 
                    id="friend-card"
                onClick={() => this.show_friend_stats(friend.friend.id)}>
                    <div id="friend-name">
                        <li>{friend.friend.username}</li>
                    </div>
                    {friend.entry.date ? 
                
                        <div id="friend-time">
                            {console.log('friend time',friend.entry.date)}
                            <small>Last Posted: {convertTime(friend.entry.date)}</small>
                            <small> At: {convertDate(friend.entry.date.slice(0,10))}</small>
                        </div> : 
                            <li>never posted</li>
                    }
                <div id="friend-total">
                    <li>
                        Total Drinks: {friend.friend.beer + friend.friend.seltzer +
                            friend.friend.craft_beer + friend.friend.wine + 
                            friend.friend.shots + friend.friend.cocktail}
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
