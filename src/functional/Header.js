import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import AuthLogin from '../container/AuthLogin'

class Header extends Component {


    render(){
        return (
            <div>
                <Link to="/">home  </Link>
                <Link to="/privateroute">profile</Link>

                <AuthLogin />
            </div>
        )
        }
}

export default Header
