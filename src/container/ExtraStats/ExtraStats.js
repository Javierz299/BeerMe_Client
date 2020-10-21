import React, { useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Context from '../../context/ProfileContext'
import Loading from '../../loading/loading'

const ExtraStats= () => {
    const context = useContext(Context)
    const state = useSelector(state => state.drinktwo_reducer)
    console.log("state",state)
    return (
        <div>
            {!state.profileStatsTwo ?
                    <Loading /> :
                <div id="profile-stats-container">
                    <div><span>Duce: {state.profileStatsTwo.duce}</span></div>
                    <div><span>Eight: {state.profileStatsTwo.eight_n_up}</span></div>
                    <div><span>B.Bong: {state.profileStatsTwo.beer_bong}</span></div>
                    <div><span>Shotgun: {state.profileStatsTwo.shotgun}</span></div>
                    <div><span>W.Flight: {state.profileStatsTwo.wine_flight}</span></div>
                    <div><span>B.Flight: {state.profileStatsTwo.beer_flight}</span></div>
                </div>
                }
        </div>
    )
}
 export default ExtraStats