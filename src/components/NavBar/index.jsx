import React from 'react'
import styled from 'styled-components'
import Cube from '../Icons/Cube'
import withAuth from '../../auth/withAuth'

const NavBarWrapper = styled.div`
  position: relative;
  display: flex;
  border-bottom: 1px solid #e6eaea;
`

const LogoHolder = styled.a`
  box-sizing: inherit;
  height: 100px;
  width: 60px;
  margin-left: 20px;
`

const Button = styled.button``

const NavBar = ({ auth0Client }) => {
  const { isAuthenticated, signOut, signIn } = auth0Client
  console.log(signIn)
  return (
    <NavBarWrapper>
      <LogoHolder href="/">
        <Cube />
        <Button onClick={() => (isAuthenticated ? signOut() : signIn())}>
          {isAuthenticated ? 'sign out' : 'sign in'}
        </Button>
      </LogoHolder>
    </NavBarWrapper>
  )
}

export default withAuth(NavBar)
