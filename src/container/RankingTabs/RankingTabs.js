import React from 'react'

import './RankingTabs.css'

import { useSelector } from 'react-redux'

//stopped rendering of this component in globalranking for every list item
const RankingTabs = React.memo(() => {
    const state = useSelector(state => state.user_reducer.ranking)
        console.log('ranking tabs',state)
    return (
        <div id="ranking-tabs-container">
            <div onClick={() => console.log('beerclicked')} ><h4>Beer</h4></div>
            <div onClick={() => console.log('seltzerclicked')} ><h4>Seltzer</h4></div>
            <div onClick={() => console.log('craftclicked')} ><h4>Craft</h4></div>
            <div onClick={() => console.log('wineclicked')} ><h4>Wine</h4></div>
            <div onClick={() => console.log('shotsclicked')} ><h4>Shots</h4></div>
            <div onClick={() => console.log('mixedclicked')} ><h4>Mixed</h4></div>
        </div>
    )
}
)

export default RankingTabs;