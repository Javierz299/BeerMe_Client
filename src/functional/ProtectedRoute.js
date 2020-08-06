import React, { Component } from 'react'
import { connect } from 'react-redux'

class ProtectedRoute extends Component {

    


    render(){
        return (
            <div>
            Welcome
            {console.log(this.props.user_profile)}
            {/* <h2>{this.props.user_profile.name}</h2> */}
        </div>
        )
    }
   
}

function mapStateToProps(state){
    return{
        user_profile: state.auth_reducer.profile
    }
}

export default connect(mapStateToProps)(ProtectedRoute)