import React from 'react'

import { useSelector } from 'react-redux'

const CraftRanking = () => {
    const state = useSelector(state => state.user_reducer)


    let craftSort = state.ranking[0].sort((a,b) => b[2].craft - a[2].craft)
    return (
    <div>
        {craftSort.map((user,i) => (
            <div className={"rank" + i} key={user[0]}>
                <div className="rank-box">
                    <h4>{i + 1} {user[0]} <span>Total: {user[2].craft}</span> </h4>
                </div>
            </div>
        ))

        }
    </div>)
 }

 export default CraftRanking