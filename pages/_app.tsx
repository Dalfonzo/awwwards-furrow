import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { CursorStyleProvider } from '~/context/cursorStyleContext'
import { CustomThemeProvider, useCustomTheme } from '~/context/themeContext'
import LandingLayout from '~/layouts/LandingLayout'
import GlobalStyles from '~/shared/styles/global.styles'

function MyApp({ Component, pageProps }: AppProps) {
  const { theme } = useCustomTheme()

  return (
    <CustomThemeProvider>
      <ThemeProvider theme={theme}>
        <CursorStyleProvider>
          <LandingLayout>
            <>
              <GlobalStyles />
              <Component {...pageProps} />
            </>
          </LandingLayout>
        </CursorStyleProvider>
      </ThemeProvider>
    </CustomThemeProvider>
  )
}

export default MyApp
