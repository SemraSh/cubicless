import React from 'react'
import styled from 'styled-components'
import withAuth from '../../auth/withAuth'

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`

export const Button = styled.button`
  display: block;
`

function LoginPage() {
  return (
    <Wrapper>
      <Button onClick={() => this.props.auth0Client.signIn()}>Sign in</Button>
    </Wrapper>
  )
}

export default withAuth(LoginPage)
