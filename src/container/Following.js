import React, { Component } from 'react'
import * as ACTIONS from '../store/actions/actions'

import TotalStats from '../container/TotalStats'
import DetailedStats from '../container/DetailedStats'

import { connect } from 'react-redux'

class Following extends Component {


    render() {
        console.log('stats',this.props.friend_stats)
        return (
            <div id="friends-container">
                <h3 id="friends-title">Friends</h3>
                {!this.props.friend_clicked ?
                <TotalStats /> :
                <DetailedStats />
                }
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        friends: state.user_reducer.friendsList,
        friend_stats: state.user_reducer.show_friend_stats,
        friend_clicked: state.user_reducer.friend_click,
    }
}

function mapDispatchToProps(dispatch){
    return {
        show: (stats) => dispatch(ACTIONS.show_friend_stats(stats)),
        hide: () => dispatch(ACTIONS.hide_friend_stats()),
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Following)
