import React, { Component } from 'react'
import Loading from '../loading/loading'
import RankingTabs from '../container/RankingTabs/RankingTabs'

import config from '../config'
import axios from 'axios'
import { connect } from 'react-redux'

import * as ACTIONS from '../store/actions/actions'

class GlobalRanking extends Component {


    componentDidMount(){
        axios.get(`${config.API_ENDPOINT}/get/alluserdata`)
            .then(res => {
                let users = []
                res.data.forEach(user => {
                    let total = (user.beer + 
                        user.seltzer + user.craft_beer + 
                        user.wine + user.shots + user.cocktail +
                        user.duce + user.eight_n_up + user.beer_bong + 
                        user.wine_flight + user.beer_flight
                        )

                        users.push([user.id,user.username,total,{
                            beer: user.beer, seltzer: user.seltzer,
                            craft: user.craft_beer, wine: user.wine,
                            shots: user.shots, mixed: user.cocktail,
                            duce: user.duce, eight: user.eight_n_up,
                            beer_bong: user.beer_bong, shotgun: user.shotgun,
                            wine_flight: user.wine_flight, beer_flight: user.beer_flight,
                        }])
                    })
                this.props.rankUsers(users.sort((a,b) => b[1] - a[1]))
                })
    }


    render() {
        return (
            <div className="global-rankng-container">
                <RankingTabs />
             <h2>Global Ranking</h2>
                {this.props.ranking === null ?
                <Loading /> :
                this.props.ranking[0].map((user,i) => ( 
                    <div onClick={() => console.log(`user ${user[0]} clicked`)} className={"rank" + i} key={user[0]}>
                        <div className="rank-box">
                            <h4>{i + 1} {user[1]} <span>total: {user[2]}</span></h4>
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
        ranking: state.user_reducer.ranking
    }
}

function mapDispatchToProps(dispatch){
    return {
        rankUsers: (userRank) => dispatch(ACTIONS.cumulative_drinks_per(userRank)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(GlobalRanking)
