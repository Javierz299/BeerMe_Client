import auth0 from 'auth0-js'
import history from './history'

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



// login = () => {
//       console.log('login reached')
//     this.auth0.authorize()
// }

// logout = () => {
//     console.log('logout reached')
//     localStorage.removeItem('access_token')
//     localStorage.removeItem('id_token')
//     localStorage.removeItem('expiresAt')
//     history.replace('/')
// }

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


    this.auth0.parseHash((err,authResult) => {
       
        console.log('auhtresult',authResult)
        if(authResult){
            localStorage.setItem('access_token', authResult.accessToken)
            localStorage.setItem('id_token',authResult.id_token)
            localStorage.setItem('profile', authResult.userProfile)
            localStorage.setItem('idTokenPayoad',authResult.idTokenPayload)
            let expiresAt = JSON.stringify((authResult.expiresIn * 1000 + new Date().getTime()))
            localStorage.setItem('expiresAt',expiresAt)

            this.setSession(authResult)

            // this.getProfile()
             console.log('userProfile from auth',this.userProfile)
            setTimeout(() => {
                history.replace('/authcheck')
            }, 1000)

        } else {
            console.log(err)
        }
    })
}
signOut = () => {
    // this.idToken = null
    // this.profile = null
    // this.expiresAt = null
    this.auth0.logout({
        returnTo: 'http://localhost:3000',
        clientID: 'nYqsYc5H4Pqc0THAin0O9wr8CcGTzlhn',
    })
}
///////////
setSession(authResult){
    //this.accessToken = authResult.accessToken
    this.idToken = authResult.idToken
    this.profile = authResult.idTokenPayload
    let expAt = JSON.stringify((authResult.expiresIn * 1000 + new Date().getTime()))
    this.expiresAt = authResult.idTokenPayload.exp * expAt
    console.log('this',this.profile)
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

// isAuthenticated = () => {
//     let expiresAt = JSON.parse(localStorage.getItem('expiresAt'))
//     return new Date().getTime() < expiresAt
// }

// getAccessToken = () => {
//     if(localStorage.getItem('access_token')){
//         const accessToken = localStorage.getItem('access_token')
//         return accessToken
//     } else {
//         return null
//     }
// }

// getProfile = () => {
   
//     let access_token = this.getAccessToken()

//     if(access_token){
//         this.auth0.client.userInfo(access_token, (err,profile) => {
//             if(profile){
//                 this.userProfile = { profile }
//                 return this.userProfile
//             }
//         })
//     }
// }

}
const auth0Client = new Auth()

export default auth0Client