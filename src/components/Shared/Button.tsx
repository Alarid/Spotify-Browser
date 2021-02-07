import React from 'react'
import { ButtonProps, default as BootstrapButton } from 'react-bootstrap/Button'
import styled from 'styled-components/macro'
import { darken } from 'polished'

// Props
interface Props extends ButtonProps {
  loading?: boolean
}

// Style
const StyledButton = styled(BootstrapButton)`
  background-color: ${(props) => props.theme.primary.main} !important;
  border-color: ${(props) => props.theme.primary.main} !important;
  color: ${(props) => props.theme.primary.contrastText} !important;
  outline: none !important;
  box-shadow: none !important;
  border-radius: 1rem;
  padding: 5px 20px;
  box-shadow: ${(props) => props.theme.outerShadow} !important;

  &:hover {
    background-color: ${(props) => darken(0.1, props.theme.primary.main)} !important;
    border-color: ${(props) => darken(0.1, props.theme.primary.main)} !important;
  }
`

/**
 * A generic custom Bootstrap button
 */
const Button: React.FC<Props> = ({ children, ...props }) => {
  const { loading } = props
  return (
    <StyledButton disabled={loading === true} {...props}>
      {children}
      {loading === true && '...'}
    </StyledButton>
  )
}

export default Button
