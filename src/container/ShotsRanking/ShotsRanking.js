import React from 'react'

import { useSelector } from 'react-redux'

const ShotsRanking = () => {
    const state = useSelector(state => state.user_reducer)


    let shotsSort = state.ranking[0].sort((a,b) => b[2].shots - a[2].shots)
    return (
    <div>
        {shotsSort.map((user,i) => (
            <div className={"rank" + i} key={user[0]}>
                <div className="rank-box">
                    <h4>{i + 1} {user[0]} <span>Total: {user[2].shots}</span> </h4>
                </div>
            </div>
        ))

        }
    </div>)
 }

 export default ShotsRanking