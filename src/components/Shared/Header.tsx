import React from 'react'
import styled from 'styled-components/macro'
import logo from 'logo.png'
import { Link, useLocation } from 'react-router-dom'
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

// App Logo
interface LogoProps extends React.HTMLProps<HTMLImageElement> {
  isHome: boolean
}
const Logo = styled.img<LogoProps>`
  width: ${(props) => (props.isHome ? '250px' : '60px')};
  margin-right: ${(props) => (props.isHome ? '0' : '10px')};
  object-fit: contain;
`

// App Title
const Title = styled.h1`
  a {
    color: ${(props) => props.theme.white} !important;
    text-decoration: none;
  }
`

/**
 * App's header
 */
const Header: React.FC = () => {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <Container>
      <Link to="/">
        <Logo src={logo} alt="logo" isHome={isHome} />
      </Link>
      <div className="d-flex flex-column">
        <Title>
          <Link to="/">Spotify Browser</Link>
        </Title>
        {isHome && <p className="mt-2">Browse through Spotify's albums collection</p>}
      </div>
    </Container>
  )
}

export default Header
