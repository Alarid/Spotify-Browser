import { DefaultTheme } from 'styled-components'
import { transparentize } from 'polished'

const outerShadows = {
  shadow1: '-8px -8px 30px #393E44',
  shadow2: '8px 8px 30px #101316',
  shadow3: `-1px -1px 60px ${transparentize(0.9, '#21272C')}`,
}

const innerShadows = {
  shadow1: `inset -6px -6px 12px ${transparentize(0.5, '#161616')}`,
  shadow2: `inset 6px 6px 12px #24292D`,
  shadow3: `inset -1px -1px 60px ${transparentize(0.9, '#24292D')}`,
}

export const theme: DefaultTheme = {
  black: '#21272C',
  white: '#F5F5F5',
  faded: transparentize(0.6, 'white'),
  primary: {
    main: '#1DB854',
    contrastText: '#ffffff',
  },
  outerShadow: `${outerShadows.shadow1}, ${outerShadows.shadow2}, ${outerShadows.shadow3}`,
  innerShadow: `${innerShadows.shadow1}, ${innerShadows.shadow2}, ${innerShadows.shadow3}`,
}
