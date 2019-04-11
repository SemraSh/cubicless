import auth0 from 'auth0-js'

class Auth {
  constructor() {
    this.auth0 = new auth0.WebAuth({
      damain: 'dev-evbgqxay.eu.auth0.com',
      audience: 'https://dev-evbgqxay.eu.auth0.com/userinfo',
      clientID: 'rnRsOTRIDRlzCPpIHX266PNg0ENArP33',
      redirectUri: 'http://localhost:3000/callback',
      responseType: 'id_token',
      scope: 'openid profile',
    })
  }

  getProfile = () => this.profile

  getIdToken = () => this.idToken

  isAuthenticated = () => new Date().getTime() < this.expiresAt

  signIn = () => this.auth0.authorize()

  handleAuthentication = () =>
    new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (err) return reject(err)
        if (!authResult || !authResult.idToken) {
          return reject(err)
        }
        this.idToken = authResult.idToken
        this.profile = authResult.idTokenPayload
        // set the time that the id token will expire at
        this.expiresAt = authResult.idTokenPayload.exp * 1000
        resolve()
      })
    })

  signOut = () => {
    this.idToken = null
    this.profile = null
    this.expiresAt = null
  }
}

const auth0Client = new Auth()

export default auth0Client
