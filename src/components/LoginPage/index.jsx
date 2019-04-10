import React from 'react'
import styled from 'styled-components'
import {
  validateEmail,
  validatePassword,
  validationMessages,
} from './validation'
import { Wrapper, Input, Button, Form, ValidationMessage, H3 } from './styled'

class LoginPage extends React.Component {
  state = {
    isLoggedIn: false,
    email: '',
    password: '',
    validationMessage: { email: '', password: '' },
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
    } else if (!isEmailValid || !isPasswordValid) {
      this.setState({
        validationMessage: {
          email: isEmailValid ? '' : validationMessages.email,
          password: isPasswordValid ? '' : validationMessages.password,
        },
      })
    }
  }

  handleChange = event => {
    const target = event.target.name
    const { value } = event.target

    if (target === 'email') {
      this.setState({
        email: value,
      })
    } else if (target === 'password') {
      this.setState({
        password: value,
      })
    }
  }

  render() {
    const { email, password, validationMessage } = this.state

    return (
      <Wrapper>
        <Form onSubmit={this.handleSubmit}>
          <H3>WANNA JOIN? FILL THE STUFF</H3>
          <Input
            name="email"
            type="text"
            placeholder="put ya email address"
            onChange={this.handleChange}
            value={email}
          />
          <ValidationMessage>{validationMessage.email}</ValidationMessage>
          <Input
            name="password"
            type="text"
            placeholder="be secure"
            onChange={this.handleChange}
            value={password}
          />
          <ValidationMessage>{validationMessage.password}</ValidationMessage>
          <Button type="submit">show me the stuff</Button>
        </Form>
      </Wrapper>
    )
  }
}

export default LoginPage
