import React, { Component } from 'react'
import config from '../config'
import axios from 'axios'

import Graph from '../container/ConfigureGraph'


class PublicGraph extends Component {

    componentDidMount(){
        axios.get(`${config.API_ENDPOINT}/get/alluserdata`)
            .then(res => console.log('graph data',res.data))
        
    }


    render() {
        return (
            <div>
                <Graph />
            </div>
        )
    }
}

export default PublicGraph
