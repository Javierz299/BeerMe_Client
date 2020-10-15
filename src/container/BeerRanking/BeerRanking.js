import React from 'react'

import { useSelector } from 'react-redux'

const BeerRanking = () => {
    const state = useSelector(state => state.user_reducer)


    let beerSort = state.ranking[0].sort((a,b) => b[2].beer - a[2].beer)
    return (
    <div>
        {beerSort.map((user,i) => (
            <div className={"rank" + i} key={user[0]}>
                <div className="rank-box">
                    <h4>{i + 1} {user[0]} <span>Total: {user[2].beer}</span> </h4>
                </div>
            </div>
        ))

        }
    </div>)
 }

 export default BeerRanking