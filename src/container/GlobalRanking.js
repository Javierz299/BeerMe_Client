import React, { Component } from 'react'
import Loading from '../loading/loading'

import config from '../config'
import axios from 'axios'
import { connect } from 'react-redux'

import * as ACTIONS from '../store/actions/actions'

class GlobalRanking extends Component {


    componentDidMount(){
        axios.get(`${config.API_ENDPOINT}/get/alluserdata`)
            .then(res => {
                console.log('graph data',res.data)
                let users = []
                console.log()
                res.data.forEach(user => {
                    let total = (user.beer + 
                        user.seltzer + user.craft_beer + 
                        user.wine + user.shots + user.cocktail)

                        users.push([user.username,total])
                    })
                    console.log('ranking',users)
                this.props.rankUsers(users.sort((a,b) => b[1] - a[1]))
                })
                
        
    }


    render() {
        console.log('rankings render',this.props.ranking)
        return (
            <div id="global-rankng-container">
             <h2>Global Ranking</h2>
                {this.props.ranking === null ?
                <Loading /> :
                this.props.ranking[0].map((user,i) => (  
                    <div id={"rank" + i}key={user[0]}>
                        <h4>{i + 1} {user[0]} <span>total: {user[1]}</span></h4>
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
