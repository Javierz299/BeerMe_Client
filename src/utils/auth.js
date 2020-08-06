import auth0 from 'auth0-js'
import history from './history'

export default class Auth {
    auth0 = new auth0.WebAuth({
        domain: 'dev-u9j3svni.auth0.com',
        clientID: 'nYqsYc5H4Pqc0THAin0O9wr8CcGTzlhn',
        redirectUri: 'http://localhost:3000/callback',
        responseType: 'token id_token',
        scope: 'openid profile email'
    })

userProfile = {}

login = () => {
      console.log('login reached')
    this.auth0.authorize()
}

logout = () => {
    console.log('logout reached')
    localStorage.removeItem('access_token')
    localStorage.removeItem('id_token')
    localStorage.removeItem('expiresAt')
}

handleAuth = () => {
    this.auth0.parseHash((err,authResult) => {
        console.log('auhtresult',authResult)
        if(authResult){
            localStorage.setItem('access_token', authResult.accessToken)
            localStorage.setItem('id_token',authResult.id_token)
        
            let expiresAt = JSON.stringify((authResult.expiresIn * 1000 + new Date().getTime()))
            localStorage.setItem('expiresAt',expiresAt)

            this.getProfile()

            setTimeout(() => {
                history.replace('/authcheck')
            }, 1000)

        } else {
            console.log(err)
        }
    })
}

isAuthenticated = () => {
    let expiresAt = JSON.parse(localStorage.getItem('expiresAt'))
    return new Date().getTime() < expiresAt
}

getAccessToken = () => {
    if(localStorage.getItem('access_token')){
        const accessToken = localStorage.getItem('access_token')
        return accessToken
    } else {
        return null
    }
}

getProfile = () => {
    let access_token = this.getAccessToken()

    if(access_token){
        this.auth0.client.userInfo(access_token, (err,profile) => {
            if(profile){
                this.userProfile = { profile }
            }
        })
    }
}


}