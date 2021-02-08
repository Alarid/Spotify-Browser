import styled from 'styled-components/macro'
import { transparentize } from 'polished'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

// Search bar container
export const StyledInputGroup = styled(InputGroup)`
  border-radius: 10px;
  box-shadow: ${({ theme }) => `${theme.outerShadow}, ${theme.innerShadow}`};

  &:focus {
    border-color: ${({ theme }) => theme.primary.main};
  }
`

// Search bar input
export const StyledInput = styled(FormControl)`
  padding: 25px 20px !important;
  padding-left: 0 !important;
  background-color: ${({ theme }) => theme.black};
  border-color: transparent;
  color: ${({ theme }) => theme.faded};

  &:focus {
    background-color: ${({ theme }) => theme.black};
    border-color: transparent;
    border-bottom: 1px solid ${({ theme }) => transparentize(0.6, theme.primary.main)};
    color: ${({ theme }) => theme.faded};
    outline: none;
    box-shadow: none;
  }
`

// Search bar input icon
export const StyledInputIcon = styled(InputGroup.Text)`
  background-color: ${({ theme }) => theme.black};
  border-color: transparent;
`
