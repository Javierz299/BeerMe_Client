import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import AuthLogin from '../container/AuthLogin'

class Header extends Component {


    render(){
        return (
            <div>
                <h2>BeerMe</h2>
                <AuthLogin />
                <Link to="/">home  </Link>
                <Link to="/public">Graph </Link>
                <Link to="/privateroute"> profile</Link>
            </div>
        )
        }
}

export default Header
