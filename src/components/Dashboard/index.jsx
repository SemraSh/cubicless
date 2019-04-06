import React from 'react'
import styled from 'styled-components'
import { engineers, principles, clients } from '../../dummyData'

const H2 = styled.h2``

const ClientList = styled.div``

const Client = styled.div``

const Dashboard = () => (
  <DashboardWrapper>
    <H2>Company: YLD</H2>
    <ClientList>
      {clients.map(client => (
        <Client>{client.name}</Client>
      ))}
    </ClientList>
  </DashboardWrapper>
)

export default Dashboard
