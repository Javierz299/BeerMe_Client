import React from 'react'

import { useSelector } from 'react-redux'

const WineRanking = () => {
    const state = useSelector(state => state.user_reducer)

    let wineSort = state.ranking[0].sort((a,b) => b[3].wine - a[3].wine)
    return (
    <div>
        {wineSort.map((user,i) => (
            <div className={"rank" + i} key={user[0]}>
                <div className="rank-box">
                    <h4>{i + 1} {user[1]} <span>Total: {user[3].wine}</span> </h4>
                </div>
            </div>
        ))

        }
    </div>)
 }

 export default WineRanking