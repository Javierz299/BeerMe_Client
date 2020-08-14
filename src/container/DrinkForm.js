import React, { useContext } from 'react'
import axios from 'axios'

import GetDateFormat from '../utils/date'

import Context from '../context/ProfileContext'
import getDate from '../utils/date'

const DrinkForm = () => {

    const context = useContext(Context)


    const handleBeerMeForm = (e) => {
        e.preventDefault()
        GetDateFormat()
        const { Beer_Me,Wine_Me,Shot_Me,Cocktail_Me } = e.target

        const BeerMe = {
            BeerMe: Beer_Me.value,
            WineMe: Wine_Me.value,
            ShotMe: Shot_Me.value,
            CocktailMe: Cocktail_Me.value
        }

        console.log('drinks',BeerMe)
    }


    
        return (
            <div>
                <form onSubmit={handleBeerMeForm}>
                    <fieldset>
                    <legend>BeerMe</legend>
                <div>
                    <label htmlFor="Beer_Me" >Beer</label>
                    <input id="Beer_Me" type="number" min="0" max="1" placeholder="0"/>

                    <label htmlFor="Wine_Me" >Wine</label>
                    <input id="Wine_Me" type="number" min="0" max="1" placeholder="0"/>
                </div>    
                <div>
                    <label htmlFor="Shot_Me" >Shots</label>
                    <input id="Shot_Me" type="number" min="0" max="1" placeholder="0"/>

                    <label htmlFor="Cocktail_Me" >Cocktails</label>
                    <input id="Cocktail_Me" type="number" min="0" max="1" placeholder="0"/>
                </div>
                <button>BeerMe</button>
                    </fieldset>
                
                    
                </form>
            </div>
        )
    
}

export default DrinkForm
