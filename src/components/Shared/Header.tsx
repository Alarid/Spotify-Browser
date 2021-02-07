import React from 'react'
import styled from 'styled-components/macro'
import logo from 'logo.png'
import { Link } from 'react-router-dom'
import { md } from 'styles/media'

// Header container
const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;

  ${md(`
    justify-content: flex-start;
  `)}
`

/**
 * App's header
 */
const Header: React.FC = () => (
  <Container>
    <Link to="/">
      <img src={logo} alt="logo" width="250px" />
    </Link>
    <div className="d-flex flex-column">
      <h1>Spotify Browser</h1>
      <p className="mt-2">Browse through Spotify's albums collection</p>
    </div>
  </Container>
)

export default Header
