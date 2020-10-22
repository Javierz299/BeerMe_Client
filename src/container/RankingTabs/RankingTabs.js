import React from 'react'
import { Link } from 'react-router-dom'

import './RankingTabs.css'

//stopped re-rendering of this component in global-tabranking for every list item
const RankingTabs = React.memo(() => {
   
    return (
        <div className="ranking-tabs-container">
            <div className="global-tab" >
                <h4><Link to="/ranking">Global</Link></h4>
            </div>
            <div className="global-tab">
                <h4><Link to="/beerTab">Beer</Link></h4>
            </div>
            <div className="global-tab">
                <h4><Link to="/seltzerTab">Seltzer</Link></h4>
            </div>
            <div className="global-tab">
                <h4><Link to="/craftTab">Craft</Link></h4>
            </div>
            <div className="global-tab">
                <h4><Link to="/wineTab">Wine</Link></h4>
            </div>
            <div className="global-tab">
                <h4><Link to="/shotsTab">Shots</Link></h4>
            </div>
            <div className="global-tab">
                <h4><Link to="/mixedTab">Mixed</Link></h4>
            </div>
        </div>
    )
}
)

export default RankingTabs;