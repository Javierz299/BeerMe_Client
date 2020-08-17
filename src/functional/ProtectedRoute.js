import React, { Component } from 'react'
import { connect } from 'react-redux'
import config from '../config'
import * as ACTIONS from '../store/actions/actions'
import Context from '../context/ProfileContext'

import DrinkForm from '../container/DrinkForm'
//import get all drinks

import auth0Client from '../utils/auth'

import axios from 'axios'

class ProtectedRoute extends Component {
    static contextType = Context

async componentDidMount(){

}

    render(){
        console.log(this.context.globalStats)
        return (
            <div>
            Welcome
            <h3> {this.context.globalProfile.username === null ? 
            this.props.profile.name : 
            this.context.globalProfile.username
            }</h3>
            <span>Beer: {this.context.globalStats.beer}</span>
            <span>Wine: {this.context.globalStats.wine}</span>
            <span>Shots: {this.context.globalStats.shots}</span>
            <span>Cocktail: {this.context.globalStats.cocktail}</span>

            
           {<DrinkForm />}
           {/* {get request/list of all drinks user has submitted; total} */}
        </div>
        )
    }
   
}

function mapStateToProps(state){
    return {
        profile: state.auth_reducer.profile,
        dbProfile: state.auth_reducer.set_db_profile
    }
}
function mapDispatchToProps(dispatch){
    return{
        set_db_profile: (profile) => dispatch(ACTIONS.set_db_profile(profile)),
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(ProtectedRoute)