import React,{ Fragment } from 'react'
import LeoCheers from '../../Favorites/leo-cheers.jpg'


export const RenderCheers = () => {
    return (
        <div className="img-box">
            <img src={LeoCheers} alt="leo cheers" />
        </div>
    )
}
