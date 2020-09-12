import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2'

import config from '../config'
import axios from 'axios'
import { connect } from 'react-redux'

import * as ACTIONS from '../store/actions/actions'


class ConfigureGraph extends Component {
     
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
                    wineTotal += user.wine
                    shotsTotal += user.shots
                    mixedTotal += user.cocktail
                }
                console.log('WINE GRAPH',wineTotal)
                console.log('BEER GRAPH',beerTotal)

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
                <Bar
          data={this.props.graphState}
          options={{
            title:{
              display:true,
              text:'Cumulative Drinks',
              fontSize:20
            },
            legend:{
              display:false,
              position:'right'
            }
          }}
        />
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        graphState: state.user_reducer.graphState
    }
}

function mapDispatchToProps(dispatch){
    return {
        cumulativeData: (drinks) => dispatch(ACTIONS.cumulative_drinks(drinks)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ConfigureGraph)
