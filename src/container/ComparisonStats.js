import React, { Component } from 'react'
import { connect } from 'react-redux'

import Context from '../context/ProfileContext'

class ComparisonStats extends Component {

    renderComparisonStats = () => {
        let profileStats = this.context.globalStats
        let friendStats = this.props.friend_stats
        let friendName = friendStats[0].username

        let profileTotal = (
            profileStats.beer +
            profileStats.seltzer +
            profileStats.craft_beer +
            profileStats.wine +
            profileStats.shots +
            profileStats.cocktail
        )

        let friendTotal = (
            friendStats[0].beer +
            friendStats[0].seltzer +
            friendStats[0].craft_beer +
            friendStats[0].wine +
            friendStats[0].shots +
            friendStats[0].cocktail
        )

       let compare
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
        console.log("context",this.context.globalStats)
        console.log("state",this.props.friend_stats)

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
