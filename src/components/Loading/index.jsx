import React from 'react'
import styled from 'styled-components'

const SpinnerWrapper = styled.div`
  width: inherit;
  height: 50px;
`

const Spinner = styled.div`
  border: 5px solid #273b7a;
  border-top: none;
  border-radious: 50%;

  animation-name: rotating;
  animation-duration: 600ms;
  animation-timing-function: linear;
  @keyframes rotating {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

const Loading = () => (
  <SpinnerWrapper>
    <Spinner />
  </SpinnerWrapper>
)

export default Loading
