import React, { useContext, Component } from 'react'
import axios from 'axios'
import config from '../config'
import * as ACTIONS from '../store/actions/actions'

import { connect } from 'react-redux'

import {getDateOnly,getDate_Time} from '../utils/date'

import Context from '../context/ProfileContext'


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

        if(this.context.globalStats === 'Empty'){
            console.log('stats came back null/empty',this.context.globalStats)
            axios.post(`${config.API_ENDPOINT}/post/userdrink`,BeerMe)
            .then(res => console.log('response from post/form',res))
        } else if(this.context.globalStats !== 'Empty'){
            console.log('founds stats',this.context.globalStats)
            setTimeout(() => {
                axios.get(`${config.API_ENDPOINT}/get/userdrink/${this.context.globalProfile.id}`)
                .then(res => this.context.dispatchStatsProfile(res.data))
            },200)
        }

     }

     handleIncrementClick = (e) => {
         //this.increment_beer(e.target.id)
         let id = e.target.id
         
            if(id === "beer" && this.props.beer != 2){
                console.log('reached')
               this.props.inc_beer(this.props.beer + 1)
               console.log('increment',this.props.beer)
            } else if(id === "wine" && this.props.wine != 2){
               this.props.inc_wine(this.props.wine + 1)
               console.log('increment',this.props.wine)
            } else if(id === "shots" && this.props.shots != 2){
                this.props.inc_shots(this.props.shots + 1)
                console.log('inc',this.props.shots)
            } else if(id === "cocktail" && this.props.cocktail != 2){
                this.props.inc_cocktail(this.props.cocktail + 1)
                console.log('inc',this.props.cocktail)
            }
     }
     handleDecrementClick = (e) => {
         //this.decrement_beer(e.target.id)
         let id = e.target.id
         
            if(id === "beer" && this.props.beer != 0){
                this.props.dec_beer(this.props.beer - 1)
                console.log('decrement',this.props.beer)
             } else if(id === "wine" && this.props.wine != 0){
                this.props.dec_wine(this.props.wine - 1)
                console.log('decrement',this.props.wine)
             } else if(id === "shots" && this.props.shots != 0){
                this.props.dec_shots(this.props.shots - 1)
                console.log('dec',this.props.shots)
            } else if(id === "cocktail" && this.props.cocktail != 0){
                this.props.dec_cocktail(this.props.cocktail - 1)
                console.log('dec',this.props.cocktail)
            }
     }

     closeConfirmationWindow = () => {
        this.props.submit_drink(false)
        console.log('submitvalue cancel',this.props.submitValue)
        this.props.dec_beer(0)
        this.props.dec_wine(0)
        this.props.dec_shots(0)
        this.props.dec_cocktail(0)
     }

    openConfirmationModal = () => {
            this.props.submit_drink(true)
     }

     handleBeerMeForm = (e) => {
         e.preventDefault()
        console.log('submitValue',this.props.submitValue)
            let datePosted = {
                date: getDate_Time()
            }
            console.log('datePosted',datePosted)
            let beerMe = {
                beer: this.props.beer,
                wine: this.props.wine,
                shots: this.props.shots,
                cocktail: this.props.cocktail,
            }
            console.log('beerMe patch',beerMe)
            axios.patch(`${config.API_ENDPOINT}/patch/userdrink/${this.context.globalProfile.id}`,beerMe)
                .then(() => axios.post(`${config.API_ENDPOINT}/post/drinkdate/${this.context.globalProfile.id}`,datePosted))
                        .then(res => console.log('date res',res))
                //revert form values back to zero
                this.props.dec_beer(0)
                this.props.dec_wine(0)
                this.props.dec_shots(0)
                this.props.dec_cocktail(0)

                this.props.submit_drink(false)
        
        console.log('submitValue',this.props.submitValue)
    }

    render(){
        console.log('render submitValue',this.props.submitValue)
        return (
            <div>
                <div>
            <span>Beer: {(this.props.profileStats.beer + this.props.beer)}</span>
            <span>Wine: {this.props.profileStats.wine}</span>
            <span>Shots: {this.props.profileStats.shots}</span>
            <span>Mixed: {this.props.profileStats.cocktail}</span>
            </div>
                <form onSubmit={this.openConfirmationModal}>
                    <div>
                    <h2>Beer:  <span>{this.props.beer}</span></h2>
                    <button id="beer" type="button" onClick={this.handleDecrementClick}>-</button>
                    <button id="beer" type="button" onClick={this.handleIncrementClick}>+</button>
                    </div>
                    <div>
                    <h2>Wine:  {this.props.wine}</h2>
                    <button id="wine" type="button" onClick={this.handleDecrementClick}>-</button>
                    <button id="wine" type="button" onClick={this.handleIncrementClick}>+</button>
                    </div>
                    <div>
                    <h2>Shots:  {this.props.shots}</h2>
                    <button id="shots" type="button" onClick={this.handleDecrementClick}>-</button>
                    <button id="shots" type="button" onClick={this.handleIncrementClick}>+</button>
                    </div>
                    <div>
                    <h2>Mixed Drink:  {this.props.cocktail}</h2>
                    <button id="cocktail" type="button" onClick={this.handleDecrementClick}>-</button>
                    <button id="cocktail" type="button" onClick={this.handleIncrementClick}>+</button>
                    </div>
                    <div>
                    <div>
                        <br/>
                        <button id="submit" type="button" onClick={this.openConfirmationModal} >Beer Me</button>
                    </div>
                    {
                    this.props.submitValue === false ?
                    <div></div> :
                    <div>
                        <br/>
                        <button id="cancel" type="button" onClick={this.closeConfirmationWindow} >cancel</button>
                        <button id="confirm" type="submit"  onClick={this.handleBeerMeForm}>confirm</button>
                     </div>
                    }
                    </div>
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
        submitValue: state.user_reducer.submit,
        profileStats: state.user_reducer.profileStats,
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
        dec_cocktail: (cocktail) => dispatch(ACTIONS.decrement_cocktail(cocktail)),
        submit_drink: (submit) => dispatch(ACTIONS.submit_drink(submit))

    }
}

export default connect(mapStatToProps,mapDispatchToProps)(DrinkForm)
