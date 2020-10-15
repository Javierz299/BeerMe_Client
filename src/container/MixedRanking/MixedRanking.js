import React from 'react'

import { useSelector } from 'react-redux'

const MixedRanking = () => {
    const state = useSelector(state => state.user_reducer)


    let mixedSort = state.ranking[0].sort((a,b) => b[2].mixed - a[2].mixed)
    return (
    <div>
        {mixedSort.map((user,i) => (
            <div className={"rank" + i} key={user[0]}>
                <div className="rank-box">
                    <h4>{i + 1} {user[0]} <span>Total: {user[2].mixed}</span> </h4>
                </div>
            </div>
        ))

        }
    </div>)
 }

 export default MixedRanking