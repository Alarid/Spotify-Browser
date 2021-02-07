import React from 'react'
import Container from 'react-bootstrap/Container'
import Header from 'components/Shared/Header'
import { Route, Switch } from 'react-router-dom'
import Home from 'sections/Home'
import Album from 'sections/Album'

const App: React.FC = () => {
  return (
    <Container>
      <Header />
      <Switch>
        <Route path="/album/:albumId">
          <Album />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Container>
  )
}

export default App
