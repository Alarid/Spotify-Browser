import React from 'react'
import Container from 'react-bootstrap/Container'
import { Route, Switch, useLocation } from 'react-router-dom'
import Cookies from 'js-cookie'
import qs from 'qs'

import Header from 'components/Shared/Header'
import Home from 'sections/Home'
import Album from 'sections/Album'
import Auth from 'sections/Auth'
import { authHash } from 'requests/apiConfig'

const App: React.FC = () => {
  const { hash } = useLocation()

  // If hash was found in query
  if (hash.length > 0) {
    // Check if the hash corresponds to a response from Spotify after user authentication
    const { access_token, expires_in, state } = qs.parse(hash.substring(1))
    if (state === authHash && access_token && expires_in) {
      // Access granted after user authentication to Spotify
      Cookies.set('token', access_token, { expires: Number(expires_in) })
    }
  }

  const token = Cookies.get('token')
  return (
    <Container>
      <Header />
      <Switch>
        <Route path="/album/:albumId">
          <Album />
        </Route>
        <Route path="/">{token ? <Home /> : <Auth />}</Route>
      </Switch>
    </Container>
  )
}

export default App
