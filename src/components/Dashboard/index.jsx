import React from 'react'
import styled from 'styled-components'
import { clients } from '../../dummyData'

const MainPage = styled.div``

const H2 = styled.h2``

const ClientList = styled.div``

const Client = styled.div``

const Dashboard = () => (
  <MainPage>
    <H2>YLD</H2>
    <ClientList>
      {clients.map((client, i) => (
        <Client key={i}>{client.name}</Client>
      ))}
    </ClientList>
  </MainPage>
)

export default Dashboard
