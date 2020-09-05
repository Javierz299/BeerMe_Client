import React, { Component } from 'react'

import config from '../config'
import axios from 'axios'
import { connect } from 'react-redux'

import * as ACTIONS from '../store/actions/actions'

class GlobalRanking extends Component {


    componentDidMount(){
        axios.get(`${config.API_ENDPOINT}/get/alluserdata`)
            .then(res => {
                console.log('graph data',res.data)
                let users = {}
                console.log()
                res.data.map(user => {
                    console.log('user',user)
                    let total = (user.beer + 
                        user.seltzer + user.craft_beer + 
                        user.wine + user.shots + user.cocktail)
                        console.log('total',total)
                    if(!users.hasOwnProperty(user.username)){
                        console.log('drinks',user.beer,user.seltzer)
                        users['username'] = user.username
                    } else {
                        console.log('users',users)
                    }
                    console.log('ranking',users)
                    this.props.rankUsers(users)

                })              
            })
        
    }


    render() {

        return (
            <div>
                Rankings
                1 2 3...
                {[this.props.ranking].map(user => {
                    console.log('usermap',user)

                })

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
