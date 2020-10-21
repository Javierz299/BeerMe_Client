import React, { Component } from 'react'
import axios from 'axios'
import config from '../../config'
import Context from '../../context/ProfileContext'

import * as ACTIONS from '../../store/actions/actions'

import { connect } from 'react-redux'


class DrinkForm2 extends Component{
    static contextType = Context;

    closeConfirmationWindow = () => {
        this.props.submit_drink(false)
        this.props.dec_duce(0)
        this.props.dec_eight_n_up(0)
        this.props.dec_duce_bong(0)
        this.props.dec_shotgun(0)
        this.props.dec_shotgun_flight(0)
        this.props.dec_duce_flight(0)
     }

    openConfirmationModal = () => {
            this.props.submit_drink(true)
     }

     handleIncrementClick = (e) => {
        let id = e.target.id
        //Allows only one type to be incremented at a time per submit
           if(id === "duce" && this.props.duce !== 1 && this.props.eight !== 1 && this.props.beer !== 1
           && this.props.shotgun !== 1 && this.props.wine !== 1 && this.props.beer !== 1){
               
              this.props.inc_duce(this.props.duce + 1)
           } else if(id === "eight" && this.props.eight !== 1 && this.props.duce !== 1 && this.props.beer !== 1
           && this.props.shotgun !== 1 && this.props.wine !== 1 && this.props.beer !== 1){
               this.props.inc_eight_n_up(this.props.eight + 1)
            } else if(id === "beer" && this.props.beer !== 1 && this.props.eight !== 1 && this.props.duce !== 1
            && this.props.shotgun !== 1 && this.props.wine !== 1 && this.props.beer !== 1){
               this.props.inc_duce_bong(this.props.beer + 1)
            }else if(id === "shotgun" && this.props.shotgun !== 1 && this.props.eight !== 1 && this.props.beer !== 1
            && this.props.duce !== 1 && this.props.wine !== 1 && this.props.beer !== 1){
              this.props.inc_shotgun(this.props.shotgun + 1)
           } else if(id === "wine" && this.props.wine !== 1 && this.props.eight !== 1 && this.props.beer !== 1
           && this.props.shotgun !== 1 && this.props.duce !== 1 && this.props.beer !== 1){
               this.props.inc_shotgun_flight(this.props.wine + 1)
           } else if(id === "beer" && this.props.beer !== 1 && this.props.eight !== 1 && this.props.beer !== 1
           && this.props.shotgun !== 1 && this.props.wine !== 1 && this.props.duce !== 1){
               this.props.inc_duce_flight(this.props.beer + 1)
           }
    }
    handleDecrementClick = (e) => {
        let id = e.target.id
        
           if(id === "duce" && this.props.duce !== 0){
               this.props.dec_duce(this.props.duce - 1)
            } else if(id === "eight" && this.props.eight !== 0){
               this.props.dec_eight_n_up(this.props.eight - 1)
            } else if(id === "beer" && this.props.beer !== 0){
               this.props.dec_duce_bong(this.props.beer - 1)
            }else if(id === "shotgun" && this.props.shotgun !== 0){
               this.props.dec_shotgun(this.props.shotgun - 1)
            } else if(id === "wine" && this.props.wine !== 0){
               this.props.dec_shotgun_flight(this.props.wine - 1)
           } else if(id === "beer" && this.props.beer !== 0){
               this.props.dec_duce_flight(this.props.beer - 1)
           }
    }

render(){
    return (
        <div>
            <form className="drink-form" onSubmit={this.openConfirmationModal}>
                <legend>Extra Thirsty</legend>
                <div className="drink-form-container">
                    <div className="drink-box">
                        <h2>DD {this.props.duce}</h2>
                        <div className="drink-button-container">
                            <button id="duce" className="drink-button" type="button" onClick={this.handleDecrementClick}>-</button>
                            <button id="duce" className="drink-button" type="button" onClick={this.handleIncrementClick}>+</button>
                        </div>
                    </div>
                    <div className="drink-box">
                        <h2>8%^  {this.props.eight}</h2>
                        <div className="drink-button-container">
                            <button id="eight" className="drink-button" type="button" onClick={this.handleDecrementClick}>-</button>
                            <button id="eight" className="drink-button" type="button" onClick={this.handleIncrementClick}>+</button>
                        </div>
                    </div>
                    <div className="drink-box">
                        <h2>Bong  {this.props.beer}</h2>
                        <div className="drink-button-container">
                            <button id="beer" className="drink-button" type="button" onClick={this.handleDecrementClick}>-</button>
                            <button id="beer" className="drink-button" type="button" onClick={this.handleIncrementClick}>+</button>
                        </div>
                    </div>
                    <div className="drink-box">
                        <h2>Shotgun  {this.props.shotgun}</h2>
                        <div className="drink-button-container">
                            <button id="shotgun" className="drink-button" type="button" onClick={this.handleDecrementClick}>-</button>
                            <button id="shotgun" className="drink-button" type="button" onClick={this.handleIncrementClick}>+</button>
                        </div>
                    </div>
                    <div className="drink-box">
                        <h2>shotgun flight  {this.props.wine}</h2>
                        <div className="drink-button-container">
                            <button id="wine" className="drink-button" type="button" onClick={this.handleDecrementClick}>-</button>
                            <button id="wine" className="drink-button" type="button" onClick={this.handleIncrementClick}>+</button>
                        </div>
                    </div>
                    <div className="drink-box">
                        <h2>duce flight  {this.props.beer}</h2>
                        <div className="drink-button-container">
                            <button id="beer" className="drink-button" type="button" onClick={this.handleDecrementClick}>-</button>
                            <button id="beer" className="drink-button" type="button" onClick={this.handleIncrementClick}>+</button>
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
                            <button id="confirm" className="confirmation_buttons" type="submit"  onClick={this.handleduceMeForm}>confirm</button>
                            </div>
                        </div>
                     </div>
                    }
                    </div>
                    </div>
                </form>
                    <br/>
                    <div>
                        <button id="submit"  className="duceMe-button" type="button" onClick={this.openConfirmationModal} >duce Me</button>
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
        submitValue: state.user_reducer.submit,
        profileStats: state.user_reducer.profileStats,
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
        submit_drink: (submit) => dispatch(ACTIONS.submit_drink(submit))

    }
}
export default connect(mapStatToProps,mapDispatchToProps)(DrinkForm2)