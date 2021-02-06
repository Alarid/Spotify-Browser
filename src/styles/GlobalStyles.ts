import { createGlobalStyle } from 'styled-components/macro'
import { theme } from './theme'

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${theme.black};
    color: ${theme.white};
  }
`

export default GlobalStyles
