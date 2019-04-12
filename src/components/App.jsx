import React, { useState, useEffect } from 'react'
import LoginPage from './LoginPage'
import Dashboard from './Dashboard'
import auth0Clinet from '../Auth'

const App = () => {
  const [isLoggedIn, setLogin] = useState(false)

  useEffect(() => {
    auth0Clinet.auth0.checkSession({}, (err, res) => {
      if (res) setLogin(true)
    })
    location.hash &&
      (async function() {
        try {
          await auth0Clinet.handleAuthentication()
          setLogin(auth0Clinet.isAuthenticated())
        } catch (e) {
          console.log('err', e)
        }
      })()
  }, [])
  return isLoggedIn ? <Dashboard /> : <LoginPage />
}

export default App
