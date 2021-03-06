import React, { Component } from 'react'
import * as ACTIONS from '../store/actions/actions'
import Context from '../context/ProfileContext'

//import axios from 'axios'
//import config from '../config'

import TotalStats from '../container/TotalStats'
import DetailedStats from '../container/DetailedStats'

import { connect } from 'react-redux'

class Following extends Component {

    static contextType = Context

    render() {
        return (
            <div id="friends-container">
                <div>
                    <h3 id="friends-title">
                    <small> - click your friends to see their stats -</small>
                    </h3>
                </div>
                <div>
                    <div>
                        {!this.props.friend_clicked ?
                        <TotalStats /> :
                        <DetailedStats />
                        }
                    </div>
                </div>
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
        friends: (following) => dispatch(ACTIONS.following(following)),
        total_friends: (total) => dispatch(ACTIONS.total_friends(total)),
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Following)
