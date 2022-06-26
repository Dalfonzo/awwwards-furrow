import { useState } from 'react'
import { darkTheme, lightTheme } from '~/shared/theme'

const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useState({ mode: 'light', theme: lightTheme })

  const toggleTheme = () => {
    setCurrentTheme((prev) => ({
      mode: prev.mode === 'light' ? 'dark' : 'light',
      theme: prev.mode === 'light' ? darkTheme : lightTheme,
    }))
  }

  const isLightMode = currentTheme.mode === 'light'
  const isDarkMode = currentTheme.mode === 'dark'

  return { theme: currentTheme.theme, toggleTheme, isLightMode, isDarkMode }
}

export default useTheme
