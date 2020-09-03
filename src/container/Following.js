import React, { Component } from 'react'
import * as ACTIONS from '../store/actions/actions'

import { connect } from 'react-redux'

class Following extends Component {


show_friend_stats = () => {
    if(this.props.friend_stats){
        console.log('hide')
        this.props.hide()
    }
    if(!this.props.friend_stats){
        console.log('show')
        this.props.show()
    }
}


    render() {
        return (
            <div>
                Following
                {this.props.friends === null ?
                <div>no friends yet</div>:
                this.props.friends.map(friend => 
                <div key={friend[0].id} onClick={this.show_friend_stats}>
                    <li>{
                    friend[0].username}
                    </li>
                <span>
                    Total Drinks: {friend[0].beer + friend[0].wine + 
                        friend[0].shots + friend[0].cocktail}
                {this.props.friend_stats ? 
                  <div>
                    Beer: {friend[0].beer}
                    Wine: {friend[0].wine}
                    Shots: {friend[0].shots}
                    Mixed: {friend[0].cocktail}
                  </div> : null
                  }
                </span>
                    </div>
                    )
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
        show: () => dispatch(ACTIONS.show_friend_stats()),
        hide: () => dispatch(ACTIONS.hide_friend_stats()),
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Following)
