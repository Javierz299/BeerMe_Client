import React  from 'react'
import { useDispatch } from 'react-redux'

import LeoCheers from '../../Favorites/leo-cheers.jpg'
import { CHEERS_IMG } from '../../store/actions/action_types'


const RenderCheers = () => {
   const dispatch = useDispatch()

    return (
        <div className="cheers-img-box">
            <img onClick={() => dispatch({type: CHEERS_IMG})} src={LeoCheers} alt="leo cheers" />
        </div>
    )
}

export default RenderCheers;
