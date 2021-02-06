import React from 'react'
import Container from 'react-bootstrap/Container'
import Header from './components/Header'
import { Route, Switch } from 'react-router-dom'
import { Home } from 'react-feather'

const App: React.FC = () => {
  return (
    <Container>
      <Header />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Container>
  )
}

export default App
