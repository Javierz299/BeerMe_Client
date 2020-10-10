import React,{ useContext } from 'react'

import LeoCheers from '../../Favorites/leo-cheers.jpg'


const RenderCheers = () => {

    //console.log('cheers',cheers)
    return (
        <div className="img-box">
            <img src={LeoCheers} alt="leo cheers" />
        </div>
    )
}

export default RenderCheers;
