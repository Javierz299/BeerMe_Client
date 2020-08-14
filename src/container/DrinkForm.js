import React, { useContext } from 'react'
import axios from 'axios'
import config from '../config'

import {getDateOnly,getDate_Time} from '../utils/date'

import Context from '../context/ProfileContext'

const DrinkForm = () => {

    const context = useContext(Context)


    const handleBeerMeForm = (e) => {
        e.preventDefault()
        getDateOnly()
        getDate_Time()
        const { Beer_Me,Wine_Me,Shot_Me,Cocktail_Me } = e.target

        if(Beer_Me.value === ""){
            Beer_Me.value = 0
        }
        if(Wine_Me.value === ""){
            Wine_Me.value = 0
        }
        if(Shot_Me.value === ""){
            Shot_Me.value = 0
        }
        if(Cocktail_Me.value === ""){
            Cocktail_Me.value = 0
        }
        
        const BeerMe = {
            user_id: context.globalProfile.id,
            beer: Number(Beer_Me.value),
            wine: Number(Wine_Me.value),
            shots: Number(Shot_Me.value),
            cocktail: Number(Cocktail_Me.value),
            date: getDateOnly()
        }
        axios.post(`${config.API_ENDPOINT}/post/userdrink`,BeerMe)

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
