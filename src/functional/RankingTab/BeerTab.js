import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

import RankingTabs from '../../container/RankingTabs/RankingTabs'
import BeerRanking from '../../container/BeerRanking/BeerRanking'

const BeerTab = () => {
    const state = useSelector(state => state.user_reducer)

    return (
        <div>
            <RankingTabs />
            <h2>Beer Ranking</h2>
            {state.ranking === null ?
            <Redirect to="/ranking" /> :
            <BeerRanking />
            }
        </div>
    )
}


export default BeerTab;