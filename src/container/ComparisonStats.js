import React, { Component } from 'react'
import { connect } from 'react-redux'

import Context from '../context/ProfileContext'

class ComparisonStats extends Component {

    renderComparisonStats = () => {
        let profileStats = this.context.globalStats
        let friendStats = this.props.friend_stats
        let friendName = friendStats[0].username
        console.log('comparison stats,friends',friendStats)

        console.log('profileStats',profileStats)


        let profileTotal = (
            (profileStats.beer +
            profileStats.seltzer +
            profileStats.craft_beer +
            profileStats.wine +
            profileStats.shots +
            profileStats.cocktail) +
            (friendStats[0].duce +
                friendStats[0].eight_n_up +
                friendStats[0].beer_bong +
                friendStats[0].shotgun +
                friendStats[0].wine_flight +
                friendStats[0].beer_flight)
        )

        let friendTotal = (
            (friendStats[0].beer +
            friendStats[0].seltzer +
            friendStats[0].craft_beer +
            friendStats[0].wine +
            friendStats[0].shots +
            friendStats[0].cocktail) +
            (friendStats[0].duce +
                friendStats[0].eight_n_up +
                friendStats[0].beer_bong +
                friendStats[0].shotgun +
                friendStats[0].wine_flight +
                friendStats[0].beer_flight)
        )

       let compare
       console.log('compare',profileTotal,friendTotal)
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

function mapStatToProps(state){
    return {
        friend_stats: state.user_reducer.show_friend_stats,
    }
}

export default connect(mapStatToProps)(ComparisonStats)
