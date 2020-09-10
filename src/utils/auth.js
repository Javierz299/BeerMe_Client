import auth0 from 'auth0-js'

 class Auth {
    auth0 = new auth0.WebAuth({
        domain: 'dev-u9j3svni.auth0.com',
        clientID: 'nYqsYc5H4Pqc0THAin0O9wr8CcGTzlhn',
        redirectUri: 'http://localhost:3000/callback',
        responseType: 'token id_token',
        scope: 'openid profile email'
    })


    getProfile = () => {
        return this.profile
    }

    getIdToken = () => {
        return this.idToken
    }

    isAuthenticated = () => {
        return new Date().getTime() < this.expiresAt
    }

    signIn = () => {
        this.auth0.authorize()
    }
    
handleAuthentication = () => {
    return new Promise((resolve, reject) => {
        this.auth0.parseHash((err, authResult) => {
          if (err) return reject(err);
          if (!authResult || !authResult.idToken) {
            return reject(err);
          }
          this.idToken = authResult.idToken;
          this.profile = authResult.idTokenPayload;
          let expAt = JSON.stringify((authResult.expiresIn * 1000 + new Date().getTime()))
          this.expiresAt = authResult.idTokenPayload.exp * expAt;
          resolve();
        });
      })
}
signOut = () => {
    this.idToken = null
    this.profile = null
    this.expiresAt = null
    this.auth0.logout({
        returnTo: 'http://localhost:3000',
        clientID: 'nYqsYc5H4Pqc0THAin0O9wr8CcGTzlhn',
    })
}
setSession(authResult){
    this.accessToken = authResult.accessToken
    this.idToken = authResult.idToken
    this.profile = authResult.idTokenPayload
    let expAt = JSON.stringify((authResult.expiresIn * 1000 + new Date().getTime()))
    this.expiresAt = authResult.idTokenPayload.exp * expAt
}

silentAuth(){
    return new Promise((resolve,reject) => {
        this.auth0.checkSession({}, (err,authResult) => {
            if(err) return reject(err)
            this.setSession(authResult)
            resolve()
        })
    })
}

}
const auth0Client = new Auth()

export default auth0Client