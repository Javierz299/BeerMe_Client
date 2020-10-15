import React  from 'react'
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

import RankingTabs from '../../container/RankingTabs/RankingTabs'
import SeltzerRanking from '../../container/SeltzerRanking/SeltzerRanking'

const SeltzerTab = () => {
    const state = useSelector(state => state.user_reducer)

    return (
        <div>
            <RankingTabs />
            <h2>Seltzer Ranking</h2>
            {state.ranking === null ?
            <Redirect to="/ranking" /> :
            <SeltzerRanking />
            }
        </div>
    )
}


export default SeltzerTab;