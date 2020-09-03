import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as ACTIONS from '../store/actions/actions'

export class DetailedStats extends Component {
    hide_friend_stats = () => {
        console.log("change state to revert back to showing all friends")
        this.props.friend_click_off()
    }


    render() {
        return (
                 <div onClick={() => this.hide_friend_stats()}>
                    <h3>{this.props.friend_stats[0].username}</h3>
                    <div>
                        Beer: {this.props.friend_stats[0].beer}
                       Wine: {this.props.friend_stats[0].wine}
                     Shots: {this.props.friend_stats[0].shots}
                     Mixed: {this.props.friend_stats[0].cocktail}
                  </div>
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
        friend_click_off: () =>  dispatch(ACTIONS.friend_click_off())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DetailedStats)
