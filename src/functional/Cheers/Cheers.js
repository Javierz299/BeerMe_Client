import React,{ useEffect, useContext, useState} from 'react'

import axios from 'axios'
import config from '../../config'
import Context from '../../context/ProfileContext'

import { useSelector } from 'react-redux'
import { RenderCheers } from './RenderCheers'

const Cheers = () => {
    const user = useContext(Context)
    let [cheers, setCheers] = useState([])
    let [img, setImg] = useState(false)
    const friends = useSelector(state => state.user_reducer.friendsList)

    useEffect(() => {
        const userId = Number(user.globalProfile.id)
        async function getCheers(){
            const result = await axios.get(`${config.API_ENDPOINT}/get/allCheers/${userId}`)
                .then(res => res)
                setCheers(result.data)
        }
       getCheers()
    },[])

    console.log("friends",friends)
    return (
        <div id="cheers-container">
            <h2>Cheers</h2>
            <div>
                {cheers.length > 0 ?
                    cheers.map(cheer => (
                        <div key={cheer.user_id}>
                            <div>
                                {cheer.user_id}, cheers! 
                                 <button id={cheer.user_id} type="button" onClick={() => setImg(true)}>open</button>
                            </div>
                        </div>
                    )) :
                    <span></span>     
                }
                <div className="cheers-img-container">
                    {
                    img ? <RenderCheers /> : img
                    }
                </div>
            </div>
        </div>
    )
};

export default Cheers;
