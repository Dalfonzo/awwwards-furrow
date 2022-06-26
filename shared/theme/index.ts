import { DefaultTheme } from 'styled-components'
import { breakPoints } from './breakpoints'
import { colors } from './colors'

export const lightTheme: DefaultTheme = {
  colors: {
    text: colors.black,
    background: colors.primary,
    ...colors,
  },
  breakPoints,
}

export const darkTheme: DefaultTheme = {
  colors: {
    text: colors.primary,
    background: colors.black,
    ...colors,
  },
  breakPoints,
}
