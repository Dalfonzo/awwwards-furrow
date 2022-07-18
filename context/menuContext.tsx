import { createContext, useContext, useState } from 'react'

interface MenuContextI {
  isMenuOpen: boolean
  toggleMenu(): void
}

const MenuContext = createContext<MenuContextI | null>(null)

const MenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen((prevState) => !prevState)
  return <MenuContext.Provider value={{ isMenuOpen, toggleMenu }}>{children}</MenuContext.Provider>
}

const useMenu = () => {
  const context = useContext(MenuContext)

  if (!context) {
    throw new Error('useMenu must be used within a MenuProvider')
  }

  return context
}

export { MenuProvider, useMenu }
