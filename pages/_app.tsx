import type { AppProps } from 'next/app'
import { CursorStyleProvider } from '~/context/cursorStyleContext'
import { LayoutDimensionsProvider } from '~/context/layoutDimensionsContext'
import { MenuProvider } from '~/context/menuContext'
import { CustomThemeProvider } from '~/context/themeContext'
import LandingLayout from '~/layouts/LandingLayout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CustomThemeProvider>
      <MenuProvider>
        <CursorStyleProvider>
          <LayoutDimensionsProvider>
            <LandingLayout>
              <Component {...pageProps} />
            </LandingLayout>
          </LayoutDimensionsProvider>
        </CursorStyleProvider>
      </MenuProvider>
    </CustomThemeProvider>
  )
}

export default MyApp
