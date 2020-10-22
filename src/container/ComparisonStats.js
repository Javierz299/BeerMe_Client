import React, { Component } from 'react'
import { connect } from 'react-redux'

import Context from '../context/ProfileContext'

class ComparisonStats extends Component {

    renderComparisonStats = () => {
        let profileStats = this.context.globalStats
        let friendStats = this.props.friend_stats
        let friendName = friendStats[0].username
        let compare;
        let friendTotal;

        let profileTotal = (
            profileStats.beer +
            profileStats.seltzer +
            profileStats.craft_beer +
            profileStats.wine +
            profileStats.shots +
            profileStats.cocktail +
                this.props.profileStatsTwo.duce +
                this.props.profileStatsTwo.eight_n_up +
                this.props.profileStatsTwo.beer_bong +
                this.props.profileStatsTwo.shotgun +
                this.props.profileStatsTwo.wine_flight +
                this.props.profileStatsTwo.beer_flight
        )
            //if no initial form values for second drink form then only add first form values
            if(friendStats.length === 1) {
                    friendTotal = (
                    (friendStats[0].beer +
                    friendStats[0].seltzer +
                    friendStats[0].craft_beer +
                    friendStats[0].wine +
                    friendStats[0].shots +
                    friendStats[0].cocktail)
                )
            } else {
                friendTotal = (
                    (friendStats[0].beer +
                    friendStats[0].seltzer +
                    friendStats[0].craft_beer +
                    friendStats[0].wine +
                    friendStats[0].shots +
                    friendStats[0].cocktail) +
                        (friendStats[1].duce +
                        friendStats[1].eight_n_up +
                        friendStats[1].beer_bong +
                        friendStats[1].shotgun +
                        friendStats[1].wine_flight +
                        friendStats[1].beer_flight)
                )
            }
     
       if(profileTotal >= friendTotal){
           compare = profileTotal - friendTotal
       } else if(friendTotal >= profileTotal){
           compare = profileTotal - friendTotal
       }
        

        return (
            <div>
                {profileTotal >= friendTotal ?
                <div>You are {compare} drinks ahead of {friendName} </div> :
                <div>You are {compare} drinks behind {friendName}</div>
                }
            </div>
        )


    }

    static contextType = Context
    render() {
        return (
            <div>
                ComparisonStats
                <this.renderComparisonStats />
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        profileStatsTwo: state.drinktwo_reducer.profileStatsTwo,
        friend_stats: state.user_reducer.show_friend_stats,
    }
}

export default connect(mapStateToProps)(ComparisonStats)
