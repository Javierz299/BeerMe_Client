import react from 'react'
import Auth from './auth'

const auth = new Auth()

const handleAuthentication = (props) => {
    console.log('handleprops',props)
    console.log('handleporp',props.location)
    console.log('handleprops',props.location.hash)
    if(props.location.hash){
        auth.handleAuth()
    }
}

export default {handleAuthentication,auth }