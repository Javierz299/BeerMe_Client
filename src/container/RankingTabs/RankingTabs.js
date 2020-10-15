import React from 'react'
import { Link } from 'react-router-dom'

import './RankingTabs.css'

//stopped re-rendering of this component in globalranking for every list item
const RankingTabs = React.memo(() => {
   
    return (
        <div className="ranking-tabs-container">
            <div id="global" >
                <h4><Link to="/ranking">Global</Link></h4>
            </div>
            <div id="beer-tab">
                <h4><Link to="/beerTab">Beer</Link></h4>
            </div>
            <div id="global" onClick={() => console.log('seltzerclicked')} >
                <h4><Link to="/seltzerTab">Seltzer</Link></h4>
            </div>
            <div id="global" onClick={() => console.log('craftclicked')} >
                <h4><Link to="/beerTab">Craft</Link></h4>
            </div>
            <div id="global" onClick={() => console.log('wineclicked')} >
                <h4><Link to="/beerTab">Wine</Link></h4>
            </div>
            <div id="global" onClick={() => console.log('shotsclicked')} >
                <h4><Link to="/beerTab">Shots</Link></h4>
            </div>
            <div id="global" onClick={() => console.log('mixedclicked')} >
                <h4><Link to="/beerTab">Mixed</Link></h4>
            </div>
        </div>
    )
}
)

export default RankingTabs;