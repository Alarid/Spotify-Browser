import React from 'react'
import styled from 'styled-components/macro'

// Container
const Container = styled.div`
  border: 1px solid ${(props) => props.theme.white};
  color: ${(props) => props.theme.white};
  text-transform: uppercase;
  font-size: 10px;
  padding: 1px 5px;
`

/**
 * Explicit Component
 *
 * Used to show a little "Explicit" tag on explicit tracks
 */
const Explicit: React.FC = () => <Container>Explicit</Container>

export default Explicit
