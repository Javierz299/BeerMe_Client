import React, { Component } from 'react'
import * as ACTIONS from '../store/actions/actions'

import { connect } from 'react-redux'

class Following extends Component {


show_friend_stats = (id) => {
    console.log('id',id)
    let friendId = id
    console.log('onclick,',friendId)

    let friendStats = this.props.friends.find(friend => friend[0].id === friendId)

    this.props.show(friendStats)
    console.log("friendstats",friendStats)
    console.log('stats',this.props.friend_stats)
}


    render() {
        console.log('stats',this.props.friend_stats)
        return (
            <div>
                Following
                {this.props.friends === null ?
                <div>no friends yet</div>:
                this.props.friends.map(friend => 
                <div key={friend[0].id} onClick={() => this.show_friend_stats(friend[0].id)}>
                    <li>{
                    friend[0].username}
                    </li>
                <span>
                    Total Drinks: {friend[0].beer + friend[0].wine + 
                        friend[0].shots + friend[0].cocktail}
                </span>
                    </div>
                    )
                }
                {this.props.friend_stats === null ?
                null :
                <div>beer: {this.props.friend_stats[0].beer}</div>
                }  

            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        friends: state.user_reducer.friendsList,
        friend_stats: state.user_reducer.show_friend_stats,
    }
}

function mapDispatchToProps(dispatch){
    return {
        show: (stats) => dispatch(ACTIONS.show_friend_stats(stats)),
        hide: () => dispatch(ACTIONS.hide_friend_stats()),
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Following)
