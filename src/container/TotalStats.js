import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import config from '../config'

import Context from '../context/ProfileContext'


import * as ACTIONS from '../store/actions/actions'

class TotalStats extends Component {

    static contextType = Context;

    show_friend_stats = (id) => {
        let friendId = id
        let friendStats = this.props.friends.find(friend => friend[0].id === friendId)
    
        this.props.show(friendStats)
        this.props.friend_clicked_on()
    }

    send_cheers = (id,friendName) => {
        const userId = this.context.globalProfile.id
        const friendId = Number(id);
        const name = friendName
        const data = {
            user_id: userId,
            sent_to: friendId,
        };
        axios.post(`${config.API_ENDPOINT}/post/sendCheers`,data)
            .then(res => {
                if(res.data.user_id){
                    alert(' sent cheers to ' + name)
                } else {
                    alert('already sent cheers ')
                }
            })
    }

    render() {
        console.log('friends',this.props.friends)
        return (
            <div>
                {this.props.friends === null ?
                <div id="no-friends-yet">no friends yet</div> :
                this.props.friends.map(friend => (
                    
                    <div key={friend[0].id} 
                    id="friend-card"
                onClick={() => this.show_friend_stats(friend[0].id)}>
                    <div id="friend-name">
                        <li>{friend[0].username}</li>
                    </div>
                    {friend[0].last ? 
                        <div id="friend-time">
                            <small>Last Posted: {friend[0].last.slice(9,20)}</small>
                            <small> At: {friend[0].last.slice(0,9)}</small>
                        </div> : 
                            <li>never posted</li>
                    }
                <div id="friend-total">
                    <li>
                        Total Drinks: { (friend[1]) ?
                
                            (friend[0].beer + friend[0].seltzer +
                            friend[0].craft_beer + friend[0].wine + 
                            friend[0].shots + friend[0].cocktail) + (friend[1].duce + friend[1].eight_n_up +
                            friend[1].beer_bong + friend[1].shotgun +
                            friend[1].wine_flight + friend[1].beer_flight) :

                            (friend[0].beer + friend[0].seltzer +
                            friend[0].craft_beer + friend[0].wine + 
                            friend[0].shots + friend[0].cocktail)
                            }
                    </li>
                    <span><button id={friend[0].id} type="button" onClick={(e) => this.send_cheers(e.target.id,friend[0].username)}>cheers</button></span>
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
