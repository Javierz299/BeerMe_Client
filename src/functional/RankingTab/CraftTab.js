import React  from 'react'
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

import RankingTabs from '../../container/RankingTabs/RankingTabs'
import CraftRanking from '../../container/CraftRanking/CraftRanking'

const CraftTab = () => {
    const state = useSelector(state => state.user_reducer)

    return (
        <div>
            <RankingTabs />
            <h2>Craft Ranking</h2>
            {state.ranking === null ?
            <Redirect to="/ranking" /> :
            <CraftRanking />
            }
        </div>
    )
}


export default CraftTab;