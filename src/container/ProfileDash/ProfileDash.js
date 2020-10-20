import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import config from '../../config'
import * as ACTIONS from '../../store/actions/actions'
import axios from 'axios'
import Context from '../../context/ProfileContext'
import { Link } from 'react-router-dom'
import Loading from '../../loading/loading'


class ProfileDash extends Component{
    static contextType = Context

    componentDidMount(){
        
        axios.get(`${config.API_ENDPOINT}/get/userdrink/${this.context.globalProfile.id}`)
         .then(res => this.context.dispatchStatsProfile(res.data))
         .then(() => this.props.set_profile_stats(this.context.globalStats))

          axios.get(`${config.API_ENDPOINT}/get/lastestentry/${this.context.globalProfile.id}`)
           .then(res => {
             if(res.data.message){
                 return;
             }               
             this.props.last_entry(res.data)
           })

           axios.get(`${config.API_ENDPOINT}/get/friendrequests/${this.context.globalProfile.id}`)
           .then(res => {
               if(res.data.message){
                   return;
               }
               let names = []
               res.data.forEach((user) => names.push([user[0].username,user[1]]))
              this.props.pending(names)
           })

           axios.get(`${config.API_ENDPOINT}/get/following/${this.context.globalProfile.id}`)
           .then(res => {
               if(res.data.length === 0){
                   return
               }
               this.props.total_friends(res.data.length)
               this.props.friends(res.data)                  
           })

           const userId = Number(this.context.globalProfile.id)
    
         axios.get(`${config.API_ENDPOINT}/get/allCheers/${userId}`)
             .then(res => this.props.set_cheers(res.data))
 
 }

render(){
    return (
        <Fragment>
            <div id="friends-link-container">
                    <div id="friends-link-box">
                        <div className="friends-link"><Link to="/friends">Friends</Link></div>
                        {/* request is green when you have requests else not green */}
                        <div id={this.props.pending_requests === null || this.props.pending_requests.length > 0 ? 
                        "requests" : ""} 
                        className="friends-link"><Link to="/pending">Requests</Link></div>

                        <div id={this.props.cheers === null || this.props.cheers.length > 0 ? 
                        "requests" : ""} 
                        className="friends-link"><Link to="/cheers">Cheers</Link></div>

                        {/* <div className="friends-link"><Link to="/cheers">test box</Link></div> */}
                    </div>
                    <div id="following-container">
                        <h3>Friends: {this.props.totalFriends}</h3>
                    </div>
                
                </div>
             {!this.context.globalProfile ? 
                <Loading /> : 
            <div id="name-date-container">
                <h3>{this.context.globalProfile.username}</h3>
                <h5>Last Drink At: {this.props.entry === null ? null : this.props.entry.slice(0,8)}</h5>
                <h5>On: {this.props.entry === null ? null : this.props.entry.slice(9,20)}</h5>
            </div>
            }
        </Fragment>
    )
    }
}
function mapStateToProps(state){
    return {
        profile: state.auth_reducer.profile,
        profileStats: state.user_reducer.profileStats,
        totalFriends: state.user_reducer.total_friends,
        entry: state.user_reducer.last_entry,
        pending_requests: state.user_reducer.pending_requests,
        cheers: state.cheers_reducer.cheers,
        get_cheers: state.cheers_reducer.cheers,

    }
}

function mapDispatchToProps(dispatch){
    return{
        set_profile_stats: (profile) => dispatch(ACTIONS.set_profile_stats(profile)),
        pending: (pending) => dispatch(ACTIONS.pending_requests(pending)),
        friends: (following) => dispatch(ACTIONS.following(following)),
        total_friends: (total) => dispatch(ACTIONS.total_friends(total)),
        last_entry: (entry) => dispatch(ACTIONS.last_entry(entry)),
        friends_last_entry: (entry) => dispatch(ACTIONS.friends_last_entry(entry)),
        set_cheers: (cheers) => dispatch(ACTIONS.get_cheers(cheers)),
        set_cheers_names: (names) => dispatch(ACTIONS.cheers_names(names))

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProfileDash)