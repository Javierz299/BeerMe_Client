import react from 'react'
import Auth from './auth'

const auth = new Auth()

const handleAuthentication = (props) => {
    if(props.location.hash){
        auth.handleAuth()
    }
}

export default handleAuthentication