import React from 'react'

import { Link } from 'react-router-dom'

import AuthLogin from '../container/AuthLogin'

const Header = () => {
    
        return (
            <div>
                <Link to='/privateroute'>protected route</Link>
                <AuthLogin />
            </div>
        )

}

export default Header
