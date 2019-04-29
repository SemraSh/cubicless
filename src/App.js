import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Callback from './auth/Callback'
import LoginPage from './components/LoginPage'
import NavBar from './components/NavBar'
import Dashbord from './components/Dashboard'

const App = () => (
  <Router>
    <NavBar />
    <Route exact path="/" component={Dashbord} />
    <Route exact path="/login" component={LoginPage} />
    <Route exact path="/callback" component={Callback} />
  </Router>
)

export default App
