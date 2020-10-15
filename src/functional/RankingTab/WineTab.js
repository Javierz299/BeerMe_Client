import React  from 'react'
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

import RankingTabs from '../../container/RankingTabs/RankingTabs'
import WineRanking from '../../container/WineRanking/WineRanking'

const WineTab = () => {
    const state = useSelector(state => state.user_reducer)

    return (
        <div>
            <RankingTabs />
            <h2>Wine Ranking</h2>
            {state.ranking === null ?
            <Redirect to="/ranking" /> :
            <WineRanking />
            }
        </div>
    )
}


export default WineTab;