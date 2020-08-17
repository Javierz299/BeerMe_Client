import React, { useContext, Component } from 'react'
import axios from 'axios'
import config from '../config'
import * as ACTIONS from '../store/actions/actions'

import { connect } from 'react-redux'

import {getDateOnly,getDate_Time} from '../utils/date'

import Context from '../context/ProfileContext'
import { prettyDOM } from '@testing-library/react'
/////////change to class/uncontrolled compnent


class DrinkForm extends Component{

     static contextType = Context

     componentDidMount(){

        const BeerMe = {
            user_id: this.context.globalProfile.id,
            beer: 0,
            wine: 0,
            shots: 0,
            cocktail: 0,
            date: getDateOnly()
        }

        if(this.context.globalStats === 'null'){
            axios.post(`${config.API_ENDPOINT}/post/userdrink`,BeerMe)
            .then(res => console.log('response from post/form',res))
        } else if(this.context.globalStats !== 'null'){
            setTimeout(() => {
                axios.get(`${config.API_ENDPOINT}/get/userdrink/${this.context.globalProfile.id}`)
                .then(res => this.context.dispatchStatsProfile(res.data))
            },200)
        }

     }

     increment_beer = () => {
         console.log('increment')
        this.props.inc_beer(this.props.beer + 1)
     }
     decrement_beer = () => {
         console.log('decrement')
         this.props.inc_beer(this.props.beer - 1)

    }

     handleBeerMeForm = (e) => {
         e.preventDefault()
         console.log('e',e)
        
    }



    render(){
        return (
            <div>
           {/* {!this.props.globalStats === 'Empty' ? <div>Display results and edit</div> : <DrinkForm />} */}

                <form onSubmit={(e) => this.handleBeerMeForm(e)}>
                <h2>Beer:  <span>{this.props.beer}</span></h2>
                    <button onClick={() => this.decrement_beer()}>-</button>
                    <button onClick={() => this.increment_beer()}>+</button>
                    <div>
                    <button type="submit" >Beer Me</button>
                    </div>
                </form>
                <form>
                    <h2>Wine:  {this.props.wine}</h2>
                    <button>-</button><button>+</button>
                    <button>Wine Me</button>
                </form>
                <form>
                    <h2>Shots:  {this.props.shots}</h2>
                    <button>-</button><button>+</button>
                    <button>Shot Me</button>
                </form>
                <form>
                    <h2>Cocktail:  {this.props.cocktail}</h2>
                    <button>-</button><button>+</button>
                    <button>Cocktail Me</button>

                </form>
            </div>
        )
    
}
}

function mapStatToProps(state){
    return {
        beer: state.user_reducer.beer,
        wine: state.user_reducer.wine,
        shots: state.user_reducer.shots,
        cocktail: state.user_reducer.cocktail,
    }
}

function mapDispatchToProps(dispatch){
    return {
        inc_beer: (beer) => dispatch(ACTIONS.increment_beer(beer)),
        inc_wine: (wine) => dispatch(ACTIONS.increment_wine(wine)),
        inc_shots: (shots) => dispatch(ACTIONS.increment_shots(shots)),
        inc_cocktail: (cocktail) => dispatch(ACTIONS.increment_cocktail(cocktail)),
        dec_beer: (beer) => dispatch(ACTIONS.decrement_beer(beer)),
        dec_wine: (wine) => dispatch(ACTIONS.decrement_wine(wine)),
        dec_shots: (shots) => dispatch(ACTIONS.decrement_shots(shots)),
        dec_cocktail: (cocktail) => dispatch(ACTIONS.decrement_cocktail(cocktail))

    }
}

export default connect(mapStatToProps,mapDispatchToProps)(DrinkForm)
