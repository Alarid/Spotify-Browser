interface IPalette {
  main: string
  contrastText: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    black: string
    white: string
    faded: string
    primary: IPalette
    outerShadow: string
    innerShadow: string
  }
}
