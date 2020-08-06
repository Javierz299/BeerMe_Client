import React, { Component } from 'react'
import { connect } from 'react-redux'

class ProtectedRoute extends Component {

RenderProfile = (props) => (
    <div>
        <h2>{this.props.profile.profile.name}</h2>
    </div>
)
    


    render(){
        return (
            <div>
            Welcome
            {console.log(this.props.profile)}
            {this.RenderProfile()}
        </div>
        )
    }
   
}

function mapStateToProps(state){
    return{
        profile: state.auth_reducer.profile
    }
}

export default connect(mapStateToProps)(ProtectedRoute)