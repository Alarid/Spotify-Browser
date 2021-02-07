import React from 'react'
import styled from 'styled-components/macro'
import logo from 'logo.png'

// Header container
const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 30px;
`

/**
 * App's header
 */
const Header: React.FC = () => (
  <Container>
    <img src={logo} alt="logo" width="250px" />
    <div className="d-flex flex-column">
      <h1>Spotify Browser</h1>
      <p className="mt-2">Browse through Spotify's albums collection</p>
    </div>
  </Container>
)

export default Header
