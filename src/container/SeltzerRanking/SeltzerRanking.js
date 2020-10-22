import React from 'react'

import { useSelector } from 'react-redux'

const SeltzerRanking = () => {
    const state = useSelector(state => state.user_reducer)


    let seltzerSort = state.ranking[0].sort((a,b) => b[3].seltzer - a[3].seltzer)
    return (
    <div>
        {seltzerSort.map((user,i) => (
            <div className={"rank" + i} key={user[0]}>
                <div className="rank-box">
                    <h4>{i + 1} {user[1]} <span>Total: {user[3].seltzer}</span> </h4>
                </div>
            </div>
        ))

        }
    </div>)
 }

 export default SeltzerRanking