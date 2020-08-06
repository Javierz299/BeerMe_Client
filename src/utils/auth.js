import auth0 from 'auth0-js'
//import history from './history'

export default class Auth {
    auth0 = new auth0.WebAuth({
        domain: 'dev-u9j3svni.auth0.com',
        clientID: 'nYqsYc5H4Pqc0THAin0O9wr8CcGTzlhn',
        redirectUri: 'http://localhost:3000/callback',
        responseType: 'token id_token',
        scope: 'openid profile email'
    })

  login = () => {
      console.log('login reached')
    this.auth0.authorize()
}



}