import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as ACTIONS from '../store/actions/actions'

import ComparisonStats from '../container/ComparisonStats'

import beerPic from '../Favorites/icons8-beer-50.png'
import seltzerPic from '../Favorites/icons8-sparkling-water-50.png'
import craftPic from '../Favorites/icons8-guinness-beer-50.png'
import winePic from '../Favorites/icons8-wine-glass-50.png'
import shotPic from '../Favorites/icons8-whiskey-50.png'
import mixedPic from '../Favorites/icons8-cocktail-50.png'

export class DetailedStats extends Component {
    hide_friend_stats = () => {
        console.log("change state to revert back to showing all friends")
        this.props.friend_click_off()
    }


    render() {
        console.log('friendSTATS',this.props.friend_stats)
        return (
                 <div id="detailed-stats" onClick={() => this.hide_friend_stats()}>
                    <h3 id="drink-stats">{this.props.friend_stats[0].friend.username}</h3>
                    <div id="grid-stats">
                        <div><h4 className="friend-stat"><img src={beerPic} alt="beer pic" /> {this.props.friend_stats[0].friend.beer}</h4></div>
                        <div><h4 className="friend-stat"><img src={seltzerPic} alt="seltzer pic" /> {this.props.friend_stats[0].friend.seltzer}</h4></div>
                        <div><h4 className="friend-stat"><img src={craftPic} alt="craft pic" /> {this.props.friend_stats[0].friend.craft_beer}</h4></div>
                        <div><h4 className="friend-stat"><img src={winePic} alt="wine pic" /> {this.props.friend_stats[0].friend.wine}</h4></div>
                        <div><h4 className="friend-stat"><img src={shotPic} alt="shot pic" /> {this.props.friend_stats[0].friend.shots}</h4></div>
                        <div><h4 className="friend-stat"><img src={mixedPic} alt="mixed pic" /> {this.props.friend_stats[0].friend.cocktail}</h4></div>
                    </div>
                    <div id="compare-stats"><ComparisonStats /></div>
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
