import React, { Component } from 'react'
import config from '../config'
import axios from 'axios'
import { connect } from 'react-redux'
import * as ACTIONS from '../store/actions/actions'

import Graph from '../container/ConfigureGraph'


class PublicGraph extends Component {

    componentDidMount(){
        axios.get(`${config.API_ENDPOINT}/get/alluserdata`)
            .then(res => {
                console.log('graph data',res.data)
                let beerTotal = 0
                let seltzerTotal = 0
                let craftTotal = 0
                let wineTotal = 0
                let shotsTotal = 0
                let mixedTotal = 0

                for(let user of res.data){
                    beerTotal += user.beer
                    seltzerTotal += user.seltzer
                    craftTotal += user.craft_beer
                    wineTotal += user.wineTotal
                    shotsTotal += user.shots
                    mixedTotal += user.cocktail
                }
                this.props.cumulativeData([
                    beerTotal,seltzerTotal,
                    craftTotal,wineTotal,
                    shotsTotal,mixedTotal
                ])
            })
        
    }


    render() {
        return (
            <div>
                <Graph />
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {
        cumulativeData: (drinks) => dispatch(ACTIONS.cumulative_drinks(drinks)),
    }
}

export default connect (null,mapDispatchToProps)(PublicGraph)
