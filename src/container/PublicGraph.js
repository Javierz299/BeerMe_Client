import React, { Component } from 'react'
import config from '../config'
import axios from 'axios'


class PublicGraph extends Component {

    componentDidMount(){
        axios.get(`${config.API_ENDPOINT}/get/alluserdata`)
            .then(res => console.log('graph data',res))
        
    }


    render() {
        return (
            <div>
                public graph
            </div>
        )
    }
}

export default PublicGraph
