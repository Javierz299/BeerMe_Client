import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import * as ACTIONS from '../store/actions/actions'

import ComparisonStats from '../container/ComparisonStats'

import beerPic from '../Favorites/icons8-beer-50.png'
import seltzerPic from '../Favorites/icons8-sparkling-water-50.png'
import craftPic from '../Favorites/icons8-guinness-beer-50.png'
import winePic from '../Favorites/icons8-wine-glass-50.png'
import shotPic from '../Favorites/icons8-whiskey-50.png'
import mixedPic from '../Favorites/icons8-cocktail-50.png'

import Duce from '../Favorites/DrinkForm2/icons8-2-of-hearts-50.png'
import Eight from '../Favorites/DrinkForm2/icons8-8-c-100.png'
import BeerBong from '../Favorites/DrinkForm2/icons8-filter-48.png'
import Shotgun from '../Favorites/DrinkForm2/icons8-shotgun-48.png'
import WineFlight from '../Favorites/DrinkForm2/icons8-aircraft-40.png'
import BeerFlight from '../Favorites/DrinkForm2/icons8-aircraft-48.png'

class DetailedStats extends Component {
    hide_friend_stats = () => {
        this.props.friend_click_off()
    }

    render() {
        console.log('friendstats',this.props.friend_stats)
        return (
                 <div id="detailed-stats" onClick={() => this.hide_friend_stats()}>
                    <h3 id="drink-stats">{this.props.friend_stats[0].username}</h3>
                        <div id="compare-stats"><ComparisonStats /></div>
                    <div id="grid-stats">
                        <div><h4 className="friend-stat"><img src={beerPic} alt="beer pic" /> {this.props.friend_stats[0].beer}</h4></div>
                        <div><h4 className="friend-stat"><img src={seltzerPic} alt="seltzer pic" /> {this.props.friend_stats[0].seltzer}</h4></div>
                        <div><h4 className="friend-stat"><img src={craftPic} alt="craft pic" /> {this.props.friend_stats[0].craft_beer}</h4></div>
                        <div><h4 className="friend-stat"><img src={winePic} alt="wine pic" /> {this.props.friend_stats[0].wine}</h4></div>
                        <div><h4 className="friend-stat"><img src={shotPic} alt="shot pic" /> {this.props.friend_stats[0].shots}</h4></div>
                        <div><h4 className="friend-stat"><img src={mixedPic} alt="mixed pic" /> {this.props.friend_stats[0].cocktail}</h4></div>

                    {this.props.friend_stats[1].duce === undefined ? 
                    null :
                        <Fragment>
                        <div><h4 className="friend-stat"><img src={Duce} alt="duce" /> {this.props.friend_stats[1].duce}</h4></div>
                        <div><h4 className="friend-stat"><img src={Eight} alt="eight perc" /> {this.props.friend_stats[1].eight_n_up}</h4></div>
                        <div><h4 className="friend-stat"><img src={BeerBong} alt="beer bong" /> {this.props.friend_stats[1].beer_bong}</h4></div>
                        <div><h4 className="friend-stat"><img src={Shotgun} alt="shotgun" /> {this.props.friend_stats[1].shotgun}</h4></div>
                        <div><h4 className="friend-stat"><img src={WineFlight} alt="wine flight" /> {this.props.friend_stats[1].wine_flight}</h4></div>
                        <div><h4 className="friend-stat"><img src={BeerFlight} alt="beer flight" /> {this.props.friend_stats[1].beer_flight}</h4></div>
                        </Fragment>
                    }
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
