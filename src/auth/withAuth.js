import React from 'react'
import { AuthConsumer } from './AuthContext'

const withAuth = Component => () => (
  <AuthConsumer>
    {auth0Client => <Component auth0Client={auth0Client} />}
  </AuthConsumer>
)

export default withAuth
