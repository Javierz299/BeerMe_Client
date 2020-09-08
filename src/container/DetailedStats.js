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
        return (
                 <div onClick={() => this.hide_friend_stats()}>
                    <h3>{this.props.friend_stats[0].username}</h3>
                        <h4><img src={beerPic} alt="beer pic" /> {this.props.friend_stats[0].beer}</h4>
                        <h4><img src={seltzerPic} alt="seltzer pic" /> {this.props.friend_stats[0].seltzer}</h4>
                        <h4><img src={craftPic} alt="craft pic" /> {this.props.friend_stats[0].craft_beer}</h4>
                        <h4><img src={winePic} alt="wine pic" /> {this.props.friend_stats[0].wine}</h4>
                        <h4><img src={shotPic} alt="shot pic" /> {this.props.friend_stats[0].shots}</h4>
                        <h4><img src={mixedPic} alt="mixed pic" /> {this.props.friend_stats[0].cocktail}</h4>
                        <ComparisonStats />
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
