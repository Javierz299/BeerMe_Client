import React,{ useEffect, useContext, useState} from 'react'
import axios from 'axios'
import config from '../../config'
import Context from '../../context/ProfileContext'

const Cheers = () => {
    const user = useContext(Context)
    let [cheers, setCheers] = useState([])
    // const state = useSelector(state => console.log('state',state))

    useEffect(() => {
        const userId = Number(user.globalProfile.id)
        async function getCheers(){
            const result = await axios.get(`${config.API_ENDPOINT}/get/allCheers/${userId}`)
                .then(res => res)
                setCheers(result.data)
        }
       getCheers()
    },[])
    console.log("cheers",cheers)
    return (
        <div>
            <h2>Cheers</h2>
            <div>

            </div>
        </div>
    )
};

export default Cheers;
