import React from 'react'
import styled from 'styled-components'
import {
  validateEmail,
  validatePassword,
  validationMessages,
} from './validation'

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`

const Input = styled.input``

const Button = styled.button``

const Form = styled.form``

const ValidationMessage = styled.small`
  color: red;
`

class LoginPage extends React.Component {
  state = {
    isLoggedIn: false,
    email: '',
    password: '',
    message: { email: '', password: '' },
  }

  handleSubmit = event => {
    const { email, password } = this.state
    const isEmailValid = validateEmail(email)
    const isPasswordValid = validatePassword(password)

    event.preventDefault()
    if (isEmailValid && isPasswordValid) {
      this.setState({
        isLoggedIn: true,
      })
    } else {
      // TODO map messages
    }
  }

  handleInput = event => {
    this.setState({
      email: event.taget.value,
    })
  }

  render() {
    const { email, password, message } = this.state
    return (
      <Wrapper>
        <Form onSubmit={this.handleSubmit}>
          <Input
            type="email"
            placeholder="put ya email address"
            onChange={this.handleChange}
            value={email}
          />
          <ValidationMessage>{message.email}</ValidationMessage>
          <Input
            type="password"
            placeholder="be secure"
            onChange={this.handleChange}
            value={password}
          />
          <ValidationMessage>{message.password}</ValidationMessage>
          <Button type="submit">show me the stuff</Button>
        </Form>
      </Wrapper>
    )
  }
}

export default LoginPage
