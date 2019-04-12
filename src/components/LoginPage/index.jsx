import React, { useState } from 'react'
import {
  validateEmail,
  validatePassword,
  validationMessages,
} from './validation'
import { Wrapper, Input, Button, Form, ValidationMessage, H3 } from './styled'
import auth0Client from '../../Auth'

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [validationMessage, setValidationMessage] = useState({
    email: '',
    password: '',
  })

  const authenticated = auth0Client.isAuthenticated()

  const handleSubmit = event => {
    const isEmailValid = validateEmail(email)
    const isPasswordValid = validatePassword(password)

    event.preventDefault()

    if (isEmailValid && isPasswordValid) {
      auth0Client.signIn()
    } else if (!isEmailValid || !isPasswordValid) {
      setValidationMessage({
        email: isEmailValid ? '' : validationMessages.email,
        password: isPasswordValid ? '' : validationMessages.password,
      })
    }
  }

  const handleChange = event => {
    const target = event.target.name
    const { value } = event.target

    if (target === 'email') {
      setEmail(value)
    } else if (target === 'password') {
      setPassword(value)
    }
  }

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <H3>WANNA JOIN? FILL THE STUFF</H3>
        <Input
          name="email"
          type="text"
          placeholder="put ya email address"
          onChange={handleChange}
          value={email}
        />
        <ValidationMessage>{validationMessage.email}</ValidationMessage>
        <Input
          name="password"
          type="text"
          placeholder="be secure"
          onChange={handleChange}
          value={password}
        />
        <ValidationMessage>{validationMessage.password}</ValidationMessage>
        <Button type="submit">show me the stuff</Button>
      </Form>
    </Wrapper>
  )
}

export default LoginPage
