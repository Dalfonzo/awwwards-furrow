import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      accent: string
      primary: string
      black: string
      text: string
      background: string
    }
    breakPoints: {
      lg: string
      md: string
      sm: string
    }
  }
}
