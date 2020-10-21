import React, { useContext, useState } from 'react'
import Context from '../../context/ProfileContext'
import Loading from '../../loading/loading'

const InitialStats = () => {
    const context = useContext(Context)

    return (
        <div>
            {!context.globalStats ?
                    <Loading /> :
                <div id="profile-stats-container">
                    <div><span>Beer: {context.globalStats.beer}</span></div>
                    <div><span>Seltzer: {context.globalStats.seltzer}</span></div>
                    <div><span>Craft: {context.globalStats.craft_beer}</span></div>
                    <div><span>Wine: {context.globalStats.wine}</span></div>
                    <div><span>Shots: {context.globalStats.shots}</span></div>
                    <div><span>Mixed: {context.globalStats.cocktail}</span></div>
                </div>
                }
        </div>
    )
}
 export default InitialStats