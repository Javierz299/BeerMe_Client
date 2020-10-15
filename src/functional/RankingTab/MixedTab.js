import React  from 'react'
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

import RankingTabs from '../../container/RankingTabs/RankingTabs'
import MixedRanking from '../../container/MixedRanking/MixedRanking'

const MixedTab = () => {
    const state = useSelector(state => state.user_reducer)

    return (
        <div>
            <RankingTabs />
            <h2>Mixed Ranking</h2>
            {state.ranking === null ?
            <Redirect to="/ranking" /> :
            <MixedRanking />
            }
        </div>
    )
}


export default MixedTab;