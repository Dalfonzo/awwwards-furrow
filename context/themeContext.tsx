import { createContext, useContext, useState } from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import GlobalStyles from '~/shared/styles/global.styles'
import { darkTheme, lightTheme } from '~/shared/theme'
interface ThemeContextI {
  theme: DefaultTheme
  toggleTheme: () => void
  isLightMode: boolean
  isDarkMode: boolean
}

const ThemeContext = createContext<ThemeContextI>({
  theme: lightTheme,
  isLightMode: true,
  isDarkMode: false,
  toggleTheme: () => null,
})

const CustomThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentTheme, setCurrentTheme] = useState({ mode: 'light', theme: lightTheme })

  const toggleTheme = () => {
    setCurrentTheme((prev) => ({
      mode: prev.mode === 'light' ? 'dark' : 'light',
      theme: prev.mode === 'light' ? darkTheme : lightTheme,
    }))
  }

  const isLightMode = currentTheme.mode === 'light'
  const isDarkMode = currentTheme.mode === 'dark'

  return (
    <ThemeContext.Provider value={{ theme: currentTheme.theme, toggleTheme, isLightMode, isDarkMode }}>
      <ThemeProvider theme={currentTheme.theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

const useCustomTheme = () => {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useCustomTheme must be used within a CustomThemeProvider')
  }

  return context
}

export { CustomThemeProvider, useCustomTheme }
