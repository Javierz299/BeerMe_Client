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

     handleIncrementClick = (e) => {
        let id = e.target.id
        //Allows only one type to be incremented at a time per submit
           if(id === "beer" && this.props.beer !== 1 && this.props.seltzer !== 1 && this.props.craft !== 1
           && this.props.wine !== 1 && this.props.shots !== 1 && this.props.cocktail !== 1){
               
              this.props.inc_beer(this.props.beer + 1)
           } else if(id === "seltzer" && this.props.seltzer !== 1 && this.props.beer !== 1 && this.props.craft !== 1
           && this.props.wine !== 1 && this.props.shots !== 1 && this.props.cocktail !== 1){
               this.props.inc_seltzer(this.props.seltzer + 1)
            } else if(id === "craft" && this.props.craft !== 1 && this.props.seltzer !== 1 && this.props.beer !== 1
            && this.props.wine !== 1 && this.props.shots !== 1 && this.props.cocktail !== 1){
               this.props.inc_craft(this.props.craft + 1)
            }else if(id === "wine" && this.props.wine !== 1 && this.props.seltzer !== 1 && this.props.craft !== 1
            && this.props.beer !== 1 && this.props.shots !== 1 && this.props.cocktail !== 1){
              this.props.inc_wine(this.props.wine + 1)
           } else if(id === "shots" && this.props.shots !== 1 && this.props.seltzer !== 1 && this.props.craft !== 1
           && this.props.wine !== 1 && this.props.beer !== 1 && this.props.cocktail !== 1){
               this.props.inc_shots(this.props.shots + 1)
           } else if(id === "cocktail" && this.props.cocktail !== 1 && this.props.seltzer !== 1 && this.props.craft !== 1
           && this.props.wine !== 1 && this.props.shots !== 1 && this.props.beer !== 1){
               this.props.inc_cocktail(this.props.cocktail + 1)
           }
    }
    handleDecrementClick = (e) => {
        let id = e.target.id
        
           if(id === "beer" && this.props.beer !== 0){
               this.props.dec_beer(this.props.beer - 1)
            } else if(id === "seltzer" && this.props.seltzer !== 0){
               this.props.dec_seltzer(this.props.seltzer - 1)
            } else if(id === "craft" && this.props.craft !== 0){
               this.props.dec_craft(this.props.craft - 1)
            }else if(id === "wine" && this.props.wine !== 0){
               this.props.dec_wine(this.props.wine - 1)
            } else if(id === "shots" && this.props.shots !== 0){
               this.props.dec_shots(this.props.shots - 1)
           } else if(id === "cocktail" && this.props.cocktail !== 0){
               this.props.dec_cocktail(this.props.cocktail - 1)
           }
    }

render(){
    return (
        <div>
            <form className="drink-form" onSubmit={this.openConfirmationModal}>
                <legend>Extra Thirsty</legend>
                <div className="drink-form-container">
                    <div className="drink-box">
                        <h2>DD {this.props.beer}</h2>
                        <div className="drink-button-container">
                            <button id="beer" className="drink-button" type="button" onClick={this.handleDecrementClick}>-</button>
                            <button id="beer" className="drink-button" type="button" onClick={this.handleIncrementClick}>+</button>
                        </div>
                    </div>
                    <div className="drink-box">
                        <h2>8%^  {this.props.seltzer}</h2>
                        <div className="drink-button-container">
                            <button id="seltzer" className="drink-button" type="button" onClick={this.handleDecrementClick}>-</button>
                            <button id="seltzer" className="drink-button" type="button" onClick={this.handleIncrementClick}>+</button>
                        </div>
                    </div>
                    <div className="drink-box">
                        <h2>Bong  {this.props.craft}</h2>
                        <div className="drink-button-container">
                            <button id="craft" className="drink-button" type="button" onClick={this.handleDecrementClick}>-</button>
                            <button id="craft" className="drink-button" type="button" onClick={this.handleIncrementClick}>+</button>
                        </div>
                    </div>
                    <div className="drink-box">
                        <h2>Shotgun  {this.props.wine}</h2>
                        <div className="drink-button-container">
                            <button id="wine" className="drink-button" type="button" onClick={this.handleDecrementClick}>-</button>
                            <button id="wine" className="drink-button" type="button" onClick={this.handleIncrementClick}>+</button>
                        </div>
                    </div>
                    <div className="drink-box">
                        <h2>wine flight  {this.props.shots}</h2>
                        <div className="drink-button-container">
                            <button id="shots" className="drink-button" type="button" onClick={this.handleDecrementClick}>-</button>
                            <button id="shots" className="drink-button" type="button" onClick={this.handleIncrementClick}>+</button>
                        </div>
                    </div>
                    <div className="drink-box">
                        <h2>beer flight  {this.props.cocktail}</h2>
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
                        <button id="submit"  className="beerMe-button" type="button" onClick={this.openConfirmationModal} >Beer Me</button>
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
export default connect(mapStatToProps,mapDispatchToProps)(DrinkForm2)