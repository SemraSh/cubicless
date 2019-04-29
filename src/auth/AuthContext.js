import React from 'react'
import auth0Client from './client'

const { Provider, Consumer } = React.createContext({})

export class AuthProvider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checkingSession: true,
    }
  }

  async componentDidMount() {
    if (this.props.location.pathname === '/callback') {
      this.setState({ checkingSession: false })
      return
    }
    try {
      await auth0Client.silentAuth()
      this.forceUpdate()
    } catch (err) {
      if (err.error !== 'login_required') console.log(err.error)
    }
    this.setState({ checkingSession: false })
  }

  render() {
    const { checkingSession } = this.state
    return (
      <Provider value={{ checkingSession, auth0Client }}>
        {this.props.children}
      </Provider>
    )
  }
}

export const AuthConsumer = Consumer
