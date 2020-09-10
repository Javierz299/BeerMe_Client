import React, { Component } from 'react'
import config from '../config'
import axios from 'axios'

class GuestLogin extends Component {


    componentDidMount(){
        axios.get(`${config.API_ENDPOINT}/get/userprofile/guest12@gamil.com`)
                        .then(res => console.log('guest result',res))
                            //this.context.dispatchGlobalProfile(res.data)
    }

    render() {
        return (
            <div>
                guest12
            </div>
        )
    }
}

export default GuestLogin
