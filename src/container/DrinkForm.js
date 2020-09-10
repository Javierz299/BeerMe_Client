import React, { Component } from 'react'
import axios from 'axios'
import config from '../config'
import * as ACTIONS from '../store/actions/actions'

import beerPic from '../Favorites/icons8-beer-50.png'
import seltzerPic from '../Favorites/icons8-sparkling-water-50.png'
import craftPic from '../Favorites/icons8-guinness-beer-50.png'
import winePic from '../Favorites/icons8-wine-glass-50.png'
import shotPic from '../Favorites/icons8-whiskey-50.png'
import mixedPic from '../Favorites/icons8-cocktail-50.png'


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
            date: getDateOnly(),
            seltzer: 0,
            craft_beer: 0,
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
            },400)
        }

     }

     handleIncrementClick = (e) => {
         let id = e.target.id
         //Allows only one type to be incremented at a time per submit
            if(id === "beer" && this.props.beer !== 1 && this.props.seltzer !== 1 && this.props.craft !== 1
            && this.props.wine !== 1 && this.props.shots !== 1 && this.props.cocktail !== 1){
                console.log('reached')
               this.props.inc_beer(this.props.beer + 1)
               console.log('increment',this.props.beer)
            } else if(id === "seltzer" && this.props.seltzer !== 1 && this.props.beer !== 1 && this.props.craft !== 1
            && this.props.wine !== 1 && this.props.shots !== 1 && this.props.cocktail !== 1){
                console.log('increment',this.props.craft)
                this.props.inc_seltzer(this.props.seltzer + 1)
             } else if(id === "craft" && this.props.craft !== 1 && this.props.seltzer !== 1 && this.props.beer !== 1
             && this.props.wine !== 1 && this.props.shots !== 1 && this.props.cocktail !== 1){
                this.props.inc_craft(this.props.craft + 1)
             }else if(id === "wine" && this.props.wine !== 1 && this.props.seltzer !== 1 && this.props.craft !== 1
             && this.props.beer !== 1 && this.props.shots !== 1 && this.props.cocktail !== 1){
               this.props.inc_wine(this.props.wine + 1)
               console.log('increment',this.props.wine)
            } else if(id === "shots" && this.props.shots !== 1 && this.props.seltzer !== 1 && this.props.craft !== 1
            && this.props.wine !== 1 && this.props.beer !== 1 && this.props.cocktail !== 1){
                this.props.inc_shots(this.props.shots + 1)
                console.log('inc',this.props.shots)
            } else if(id === "cocktail" && this.props.cocktail !== 1 && this.props.seltzer !== 1 && this.props.craft !== 1
            && this.props.wine !== 1 && this.props.shots !== 1 && this.props.beer !== 1){
                this.props.inc_cocktail(this.props.cocktail + 1)
                console.log('inc',this.props.cocktail)
            }
     }
     handleDecrementClick = (e) => {
         let id = e.target.id
         
            if(id === "beer" && this.props.beer !== 0){
                this.props.dec_beer(this.props.beer - 1)
                console.log('decrement',this.props.beer)
             } else if(id === "seltzer" && this.props.seltzer !== 0){
                this.props.dec_seltzer(this.props.seltzer - 1)
             } else if(id === "craft" && this.props.craft !== 0){
                this.props.dec_craft(this.props.craft - 1)
             }else if(id === "wine" && this.props.wine !== 0){
                this.props.dec_wine(this.props.wine - 1)
                console.log('decrement',this.props.wine)
             } else if(id === "shots" && this.props.shots !== 0){
                this.props.dec_shots(this.props.shots - 1)
                console.log('dec',this.props.shots)
            } else if(id === "cocktail" && this.props.cocktail !== 0){
                this.props.dec_cocktail(this.props.cocktail - 1)
                console.log('dec',this.props.cocktail)
            }
     }

     closeConfirmationWindow = () => {
        this.props.submit_drink(false)
        console.log('submitvalue cancel',this.props.submitValue)
        this.props.dec_beer(0)
        this.props.dec_seltzer(0)
        this.props.dec_craft(0)
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
                seltzer: this.props.seltzer,
                craft_beer: this.props.craft,
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
                this.props.dec_seltzer(0)
                this.props.dec_craft(0)
                this.props.dec_wine(0)
                this.props.dec_shots(0)
                this.props.dec_cocktail(0)

                this.props.submit_drink(false)
        
        console.log('submitValue',this.props.submitValue)
    }

    render(){
        console.log('render submitValue',this.props.submitValue)
        return (
            <div id="drink-form-container">
                <form id="drink-form" onSubmit={this.openConfirmationModal}>
                    <div id="drink-form-container">
                    <div className="drink-box">
                        <h2><img src={beerPic} alt="beer pic" />  {this.props.beer}</h2>
                        <div className="drink-button-container">
                            <button id="beer" className="drink-button" type="button" onClick={this.handleDecrementClick}>-</button>
                            <button id="beer" className="drink-button" type="button" onClick={this.handleIncrementClick}>+</button>
                        </div>
                    </div>
                    <div className="drink-box">
                        <h2><img src={seltzerPic} alt="seltzer pic" />  {this.props.seltzer}</h2>
                        <div className="drink-button-container">
                            <button id="seltzer" className="drink-button" type="button" onClick={this.handleDecrementClick}>-</button>
                            <button id="seltzer" className="drink-button" type="button" onClick={this.handleIncrementClick}>+</button>
                        </div>
                    </div>
                    <div className="drink-box">
                        <h2><img src={craftPic} alt="craftbeer pic" />  {this.props.craft}</h2>
                        <div className="drink-button-container">
                            <button id="craft" className="drink-button" type="button" onClick={this.handleDecrementClick}>-</button>
                            <button id="craft" className="drink-button" type="button" onClick={this.handleIncrementClick}>+</button>
                        </div>
                    </div>
                    <div className="drink-box">
                        <h2><img src={winePic} alt="wine pic" />  {this.props.wine}</h2>
                        <div className="drink-button-container">
                            <button id="wine" className="drink-button" type="button" onClick={this.handleDecrementClick}>-</button>
                            <button id="wine" className="drink-button" type="button" onClick={this.handleIncrementClick}>+</button>
                        </div>
                    </div>
                    <div className="drink-box">
                        <h2><img src={shotPic} alt="shot pic" />  {this.props.shots}</h2>
                        <div className="drink-button-container">
                            <button id="shots" className="drink-button" type="button" onClick={this.handleDecrementClick}>-</button>
                            <button id="shots" className="drink-button" type="button" onClick={this.handleIncrementClick}>+</button>
                        </div>
                    </div>
                    <div className="drink-box">
                        <h2><img src={mixedPic} alt="cocktail pic" />  {this.props.cocktail}</h2>
                        <div className="drink-button-container">
                            <button id="cocktail" className="drink-button" type="button" onClick={this.handleDecrementClick}>-</button>
                            <button id="cocktail" className="drink-button" type="button" onClick={this.handleIncrementClick}>+</button>
                        </div>
                    </div>
                    <div>
                    {
                    this.props.submitValue === false ?
                    <div></div> :
                    <div id="confirmation_box">
                        <div id="confirmation-buttons">
                            <div>
                            <button id="cancel" className="confirmation_buttons" type="button" onClick={this.closeConfirmationWindow} >cancel</button>
                            <button id="confirm" className="confirmation_buttons" type="submit"  onClick={this.handleBeerMeForm}>confirm</button>
                            </div>
                        </div>
                     </div>
                    }
                    </div>
                    </div>
                </form>
                    <br/>
                    <div>
                        <button id="submit" type="button" onClick={this.openConfirmationModal} >Beer Me</button>
                    </div>
            </div>
        )
    
}
}

function mapStatToProps(state){
    return {
        beer: state.user_reducer.beer,
        seltzer: state.user_reducer.seltzer,
        craft: state.user_reducer.craft,
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
        inc_seltzer: (seltzer) => dispatch(ACTIONS.increment_seltzer(seltzer)),
        inc_craft: (craft) => dispatch(ACTIONS.increment_craft(craft)),
        inc_wine: (wine) => dispatch(ACTIONS.increment_wine(wine)),
        inc_shots: (shots) => dispatch(ACTIONS.increment_shots(shots)),
        inc_cocktail: (cocktail) => dispatch(ACTIONS.increment_cocktail(cocktail)),

        dec_beer: (beer) => dispatch(ACTIONS.decrement_beer(beer)),
        dec_seltzer: (seltzer) => dispatch(ACTIONS.decrement_seltzer(seltzer)),
        dec_craft: (craft) => dispatch(ACTIONS.decrement_craft(craft)),
        dec_wine: (wine) => dispatch(ACTIONS.decrement_wine(wine)),
        dec_shots: (shots) => dispatch(ACTIONS.decrement_shots(shots)),
        dec_cocktail: (cocktail) => dispatch(ACTIONS.decrement_cocktail(cocktail)),
        submit_drink: (submit) => dispatch(ACTIONS.submit_drink(submit))

    }
}

export default connect(mapStatToProps,mapDispatchToProps)(DrinkForm)
