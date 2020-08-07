import React from 'react'
import { Router, Route, Redirect } from 'react-router-dom'
import history from '../utils/history'

const PrivateRoute = ({component: Component, auth}) => (
    
    <div>
        {console.log('auth from private route',auth,Component)}
    <Router history={history}>
    <Route 
        render={(props) => auth.isAuthenticated() === true ?
            <Component auth={auth} {...props} /> :
            <Redirect to={{pathname: '/redirect'}} />
        
        }
    />
    </Router>
    </div>
)

export default PrivateRoute