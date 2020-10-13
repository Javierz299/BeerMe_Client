import React,{ Component } from 'react'
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
        let cheersFriend = cheers.map(user => friends.find(friend => friend[0].id === user.user_id ))
        this.props.set_cheers_names(cheersFriend)
    }   

    async componentDidMount(){
        const userId = Number(this.context.globalProfile.id)
       
         await axios.get(`${config.API_ENDPOINT}/get/allCheers/${userId}`)
                .then(res => this.props.set_cheers(res.data))
    
            this.getNames(this.props.get_cheers,this.props.friends)
}

render(){
    console.log('cheers',console.log(this.props.get_cheers_names))
    return (
        <div id="cheers-container">
            <h2>Cheers</h2>
            {this.props.get_cheers_names === null ?
            <Loading /> :
            this.props.get_cheers_names.map(name => (
                <div key={name[0].id}> 
                    <h3>{name[0].username},sent you a cheers!</h3>
                    <button id={name[0].id} onClick={(e) => this.props.toggle_cheers_img(e.target.id)} >open</button>
                </div>
            ))
                
            }
            {this.props.cheers_img ? 
            <RenderCheers /> :
                null
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
        cheers_img: state.cheers_reducer.cheers_img,
    }
}

function mapDispatchToProps(dispatch){
    return {
        set_cheers: (cheers) => dispatch(ACTIONS.get_cheers(cheers)),
        toggle_cheers_img: (id) => dispatch(ACTIONS.cheers_img(id)),
        set_cheers_names: (names) => dispatch(ACTIONS.cheers_names(names))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cheers);
