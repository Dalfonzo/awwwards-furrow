import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { CursorStyleProvider } from '~/context/cursorStyleContext'
import { LayoutDimensionsProvider } from '~/context/layoutDimensionsContext'
import { CustomThemeProvider, useCustomTheme } from '~/context/themeContext'
import LandingLayout from '~/layouts/LandingLayout'
import GlobalStyles from '~/shared/styles/global.styles'

function MyApp({ Component, pageProps }: AppProps) {
  const { theme } = useCustomTheme()

  return (
    <CustomThemeProvider>
      <ThemeProvider theme={theme}>
        <CursorStyleProvider>
          <LayoutDimensionsProvider>
            <LandingLayout>
              <>
                <GlobalStyles />
                <Component {...pageProps} />
              </>
            </LandingLayout>
          </LayoutDimensionsProvider>
        </CursorStyleProvider>
      </ThemeProvider>
    </CustomThemeProvider>
  )
}

export default MyApp
