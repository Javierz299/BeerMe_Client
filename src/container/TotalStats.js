import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as ACTIONS from '../store/actions/actions'

class TotalStats extends Component {

    show_friend_stats = (id) => {
        let friendId = id
        let friendStats = this.props.friends.find(friend => friend[0].id === friendId)
    
        this.props.show(friendStats)
        console.log("friendstats",friendStats)
        console.log('stats',this.props.friend_stats)
        this.props.friend_clicked_on()
    }

    render() {
        console.log('friend clicked',this.props.friendClick)
        return (
            <div>
                {this.props.friends === null ?
                <div>no friends yet</div> :
                this.props.friends.map(friend => (
                    <div key={friend[0].id} 
                    id="friend_container"
                onClick={() => this.show_friend_stats(friend[0].id)}>
                    <li>{
                    friend[0].username}
                    </li>
                    {friend[0].last ? 
                        <div>
                            {console.log('friend time',friend[0].last)}
                            <small>Last Posted: {friend[0].last.slice(9,20)}</small>
                            <small> At: {friend[0].last.slice(0,9)}</small>
                        </div> : 
                            <li>never posted</li>
                    }
                <li>
                    Total Drinks: {friend[0].beer + friend[0].seltzer +
                        friend[0].craft_beer + friend[0].wine + 
                        friend[0].shots + friend[0].cocktail}
                </li>
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
