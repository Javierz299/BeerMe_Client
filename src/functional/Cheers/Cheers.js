import React,{ Component, useEffect, useState} from 'react'
import Loading from '../../loading/loading'
import { connect } from 'react-redux'

import * as ACTIONS from '../../store/actions/actions'

import axios from 'axios'
import config from '../../config'
import Context from '../../context/ProfileContext'

import RenderCheers from './RenderCheers'

class Cheers extends Component{
    static contextType = Context;

    getNames = (cheers,friends) => {
        //console.log('getNames',cheers,friends)
        let cheersFriend = cheers.map(user => friends.find(friend => friend[0].id === user.user_id ))
        //console.log('getting cheers',cheersFriend)
        this.props.set_cheers_names(cheersFriend)// create another action type to add this too
    }   

    async componentDidMount(){
        const userId = Number(this.context.globalProfile.id)
       
         await axios.get(`${config.API_ENDPOINT}/get/allCheers/${userId}`)
                .then(res => this.props.set_cheers(res.data))
    
            this.getNames(this.props.get_cheers,this.props.friends)
}

render(){
    return (
        <div id="cheers-container">
            <h2>Cheers</h2>
            {this.props.get_cheers_names === null ?
            <Loading /> :
            this.props.get_cheers_names.map(name => (
                <div key={name[0].id}> 
                    <h1>{name[0].username},sent you a cheers!</h1>
                    <button onClick={() => console.log('open clicked')} >open</button>
                </div>
            ))
                
            }
         </div>
    )
  }
}

function mapStateToProps(state){
    return {
        get_cheers: state.cheers_reducer.cheers,
        friends: state.user_reducer.friendsList,
        get_cheers_names: state.cheers_reducer.cheers_names,
    }
}

function mapDispatchToProps(dispatch){
    return {
        set_cheers: (cheers) => dispatch(ACTIONS.get_cheers(cheers)),
        toggle_cheers_img: () => dispatch(ACTIONS.cheers_img()),
        set_cheers_names: (names) => dispatch(ACTIONS.cheers_names(names))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cheers);
