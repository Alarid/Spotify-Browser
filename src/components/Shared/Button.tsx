import React from 'react'
import { ButtonProps, default as BootstrapButton } from 'react-bootstrap/Button'
import styled from 'styled-components/macro'
import { darken } from 'polished'

interface Props extends ButtonProps {
  isLoading?: boolean
}

const StyledButton = styled(BootstrapButton)`
  background-color: ${(props) => props.theme.primary.main} !important;
  border-color: ${(props) => props.theme.primary.main} !important;
  color: ${(props) => props.theme.primary.contrastText} !important;
  outline: none !important;
  box-shadow: none !important;
  border-radius: 1rem;
  padding: 5px 20px;

  &:hover {
    background-color: ${(props) => darken(0.1, props.theme.primary.main)} !important;
    border-color: ${(props) => darken(0.1, props.theme.primary.main)} !important;
  }
`

const Button: React.FC<Props> = ({ children, ...props }) => {
  const { isLoading } = props
  return (
    <StyledButton disabled={isLoading === true} {...props}>
      {children}
      {isLoading === true && '...'}
    </StyledButton>
  )
}

export default Button
