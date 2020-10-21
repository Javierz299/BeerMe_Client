import React, { Component } from 'react'
import axios from 'axios'
import config from '../../config'
import Context from '../../context/ProfileContext'

import Duce from '../../Favorites/DrinkForm2/icons8-2-of-hearts-50.png'

import * as ACTIONS from '../../store/actions/actions'

import { connect } from 'react-redux'

import {getDateOnly,getDate_Time} from '../../utils/date'


class DrinkForm2 extends Component{
    static contextType = Context

    closeDrinkWindowTwo = () => {
        this.props.submit_drink_two(false)
        this.props.dec_duce(0)
        this.props.dec_eight_n_up(0)
        this.props.dec_beer_bong(0)
        this.props.dec_shotgun(0)
        this.props.dec_wine_flight(0)
        this.props.dec_beer_flight(0)
     }

    openDrinkModalTwo = () => {
            this.props.submit_drink_two(true)
     }

     handleIncrementClick = (e) => {
        let id = e.target.id
        //Allows only one type to be incremented at a time per submit
           if(id === "duce" && this.props.duce !== 1 && this.props.eight !== 1 && this.props.beer_bong !== 1
           && this.props.shotgun !== 1 && this.props.wine_flight !== 1 && this.props.beer_flight !== 1){
              this.props.inc_duce(this.props.duce + 1)

           } else if(id === "eight" && this.props.beer_bong !== 1 && this.props.eight !== 1 && this.props.duce !== 1
              && this.props.shotgun !== 1 && this.props.wine_flight !== 1 && this.props.beer_flight !== 1){
                 this.props.inc_eight_n_up(this.props.eight + 1)
  
            } else if(id === "beerBong" && this.props.beer_bong !== 1 && this.props.eight !== 1 && this.props.duce !== 1
            && this.props.shotgun !== 1 && this.props.wine_flight !== 1 && this.props.beer_flight !== 1){
               this.props.inc_beer_bong(this.props.beer_bong + 1)

            }else if(id === "shotgun" && this.props.shotgun !== 1 && this.props.eight !== 1 && this.props.beer_bong !== 1
            && this.props.duce !== 1 && this.props.wine_flight !== 1 && this.props.beer_flight !== 1){
              this.props.inc_shotgun(this.props.shotgun + 1)

           } else if(id === "wineFlight" && this.props.wine_flight !== 1 && this.props.eight !== 1 && this.props.beer_flight !== 1
           && this.props.shotgun !== 1 && this.props.duce !== 1 && this.props.beer_bong !== 1){
               this.props.inc_wine_flight(this.props.wine_flight + 1)

           } else if(id === "beerFlight" && this.props.duce !== 1 && this.props.eight !== 1 && this.props.beer_bong !== 1
           && this.props.shotgun !== 1 && this.props.wine_flight !== 1 && this.props.beer_flight !== 1){
               this.props.inc_beer_flight(this.props.beer_flight + 1)
           }
    }
    handleDecrementClick = (e) => {
        let id = e.target.id
        
           if(id === "duce" && this.props.duce !== 0){
               this.props.dec_duce(this.props.duce - 1)

            } else if(id === "eight" && this.props.eight !== 0){
               this.props.dec_eight_n_up(this.props.eight - 1)

            } else if(id === "beerBong" && this.props.beer_bong !== 0){
               this.props.dec_beer_bong(this.props.beer_bong - 1)

            }else if(id === "shotgun" && this.props.shotgun !== 0){
               this.props.dec_shotgun(this.props.shotgun - 1)

            } else if(id === "wineFlight" && this.props.wine_flight !== 0){
               this.props.dec_wine_flight(this.props.wine_flight - 1)

           } else if(id === "beerFlight" && this.props.beer_flight !== 0){
               this.props.dec_beer_flight(this.props.beer_flight - 1)
           }
    }

    handleDrinkFormTwo = (e) => {
        e.preventDefault()
        let datePosted = {
            date: getDate_Time()
        }
           let beerMeTwo = {
               duce: this.props.duce,
               eight_n_up: this.props.eight,
               beer_bong: this.props.beer_bong,
               shotgun: this.props.shotgun,
               wine_flight: this.props.wine_flight,
               beer_flight: this.props.beer_flight,
           }
           axios.patch(`${config.API_ENDPOINT}/patch/userDrinkTwo/${this.context.globalProfile.id}`,beerMeTwo)
               .then(() => axios.post(`${config.API_ENDPOINT}/post/drinkdate/${this.context.globalProfile.id}`,datePosted))
                       .then(res => res)
               //revert form values back to zero
               this.props.dec_duce(0)
               this.props.dec_eight_n_up(0)
               this.props.dec_beer_bong(0)
               this.props.dec_shotgun(0)
               this.props.dec_wine_flight(0)
               this.props.dec_beer_flight(0)

               this.props.submit_drink_two(false)
           }

render(){
    return (
        <div>
            <form className="drink-form" onSubmit={this.openDrinkModalTwo}>
                <legend>Extra Thirsty</legend>
                <div className="drink-form-container">
                    <div className="drink-box">
                        <h2> <img src={Duce} alt="Duce" /> {this.props.duce}</h2>
                        <div className="drink-button-container">
                            <button id="duce" className="drink-button" type="button" onClick={this.handleDecrementClick}>-</button>
                            <button id="duce" className="drink-button" type="button" onClick={this.handleIncrementClick}>+</button>
                        </div>
                    </div>
                    <div className="drink-box">
                        <h2><img src={Duce} alt="eight" />  {this.props.eight}</h2>
                        <div className="drink-button-container">
                            <button id="eight" className="drink-button" type="button" onClick={this.handleDecrementClick}>-</button>
                            <button id="eight" className="drink-button" type="button" onClick={this.handleIncrementClick}>+</button>
                        </div>
                    </div>
                    <div className="drink-box">
                        <h2><img src={Duce} alt="bong" /> {this.props.beer_bong}</h2>
                        <div className="drink-button-container">
                            <button id="beerBong" className="drink-button" type="button" onClick={this.handleDecrementClick}>-</button>
                            <button id="beerBong" className="drink-button" type="button" onClick={this.handleIncrementClick}>+</button>
                        </div>
                    </div>
                    <div className="drink-box">
                        <h2><img src={Duce} alt="shotgun" />  {this.props.shotgun}</h2>
                        <div className="drink-button-container">
                            <button id="shotgun" className="drink-button" type="button" onClick={this.handleDecrementClick}>-</button>
                            <button id="shotgun" className="drink-button" type="button" onClick={this.handleIncrementClick}>+</button>
                        </div>
                    </div>
                    <div className="drink-box">
                        <h2><img src={Duce} alt="wine flight" />  {this.props.wine_flight}</h2>
                        <div className="drink-button-container">
                            <button id="wineFlight" className="drink-button" type="button" onClick={this.handleDecrementClick}>-</button>
                            <button id="wineFlight" className="drink-button" type="button" onClick={this.handleIncrementClick}>+</button>
                        </div>
                    </div>
                    <div className="drink-box">
                        <h2><img src={Duce} alt="beer flight" />  {this.props.beer_flight}</h2>
                        <div className="drink-button-container">
                            <button id="beerFlight" className="drink-button" type="button" onClick={this.handleDecrementClick}>-</button>
                            <button id="beerFlight" className="drink-button" type="button" onClick={this.handleIncrementClick}>+</button>
                        </div>
                    </div>
                    <div>
                    { 
                    this.props.submitValueTwo === false ?
                    <div></div> :
                    <div className="confirmation_box">
                        <div className="confirmation-buttons">
                            <div>
                            <button className="confirmation_buttons cancel" type="button" onClick={this.closeDrinkWindowTwo} >cancel</button>
                            <button className="confirmation_buttons confirm" type="submit"  onClick={this.handleDrinkFormTwo}>confirm</button>
                            </div>
                        </div>
                     </div>
                    }
                    </div>
                    </div>
                </form>
                    <br/>
                    <div>
                        <button id="submit"  className="duceMe-button" type="button" onClick={this.openDrinkModalTwo} >Beer Me</button>
                    </div>
        </div>
    )
  }
}

function mapStatToProps(state){
    return {
        duce: state.drinktwo_reducer.duce,
        eight: state.drinktwo_reducer.eight_n_up,
        beer_bong: state.drinktwo_reducer.beer_bong,
        shotgun: state.drinktwo_reducer.shotgun,
        wine_flight: state.drinktwo_reducer.wine_flight,
        beer_flight: state.drinktwo_reducer.beer_flight,
        submitValueTwo: state.drinktwo_reducer.submit_drink_two,
        profileStatsTwo: state.drinktwo_reducer.profileStatsTwo,
    }
}

function mapDispatchToProps(dispatch){
    return {
        inc_duce: (duce) => dispatch(ACTIONS.increment_duce(duce)),
        inc_eight_n_up: (eight) => dispatch(ACTIONS.increment_eight_n_up(eight)),
        inc_beer_bong: (beer) => dispatch(ACTIONS.increment_beer_bong(beer)),
        inc_shotgun: (shotgun) => dispatch(ACTIONS.increment_shotgun(shotgun)),
        inc_wine_flight: (wine) => dispatch(ACTIONS.increment_wine_flight(wine)),
        inc_beer_flight: (beer) => dispatch(ACTIONS.increment_beer_flight(beer)),

        dec_duce: (duce) => dispatch(ACTIONS.decrement_duce(duce)),
        dec_eight_n_up: (eight) => dispatch(ACTIONS.decrement_eight_n_up(eight)),
        dec_beer_bong: (beer) => dispatch(ACTIONS.decrement_beer_bong(beer)),
        dec_shotgun: (shotgun) => dispatch(ACTIONS.decrement_shotgun(shotgun)),
        dec_wine_flight: (wine) => dispatch(ACTIONS.decrement_wine_flight(wine)),
        dec_beer_flight: (beer) => dispatch(ACTIONS.decrement_beer_flight(beer)),

        setProfileStatsTwo: (stats) => dispatch(ACTIONS.set_profile_stats_two(stats)),
        submit_drink_two: (submit) => dispatch(ACTIONS.submit_drink_two(submit))

    }
}
export default connect(mapStatToProps,mapDispatchToProps)(DrinkForm2)