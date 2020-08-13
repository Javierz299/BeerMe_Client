import React, { Component } from 'react'

export class DrinkForm extends Component {





    render() {
        return (
            <div>
                <form>
                    <fieldset></fieldset>
                    <legend>BeerMe</legend>
                    <label>Beer</label>
                    <input type="number" min="0" max="1" placeholder="0"/>
                    <label>Wine</label>
                    <input type="number" min="0" max="1" placeholder="0"/>
                    <label>Shots</label>
                    <input type="number" min="0" max="1" placeholder="0"/>
                    <label>Cocktails</label>
                    <input type="number" min="0" max="1" placeholder="0"/>
                </form>
                </fieldset>
                
            </div>
        )
    }
}

export default DrinkForm
