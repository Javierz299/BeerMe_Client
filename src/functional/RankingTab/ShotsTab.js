import React  from 'react'
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

import RankingTabs from '../../container/RankingTabs/RankingTabs'
import ShotsRanking from '../../container/ShotsRanking/ShotsRanking'

const ShotsTab = () => {
    const state = useSelector(state => state.user_reducer)

    return (
        <div>
            <RankingTabs />
            <h2>Shots Ranking</h2>
            {state.ranking === null ?
            <Redirect to="/ranking" /> :
            <ShotsRanking />
            }
        </div>
    )
}


export default ShotsTab;