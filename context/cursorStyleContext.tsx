import { createContext, useContext, useState } from 'react'

type StateI = 'normal' | 'hover' | 'hover-accent'

interface CursorContextI {
  isNormal: boolean
  isHovered: boolean
  isAccented: boolean
  setCursorToNormalStyle(): void
  setCursorToHoverStyle(): void
  setCursorToAccentStyle(): void
}

const CursorContext = createContext<CursorContextI | null>(null)

const CursorStyleProvider = ({ children }: { children: React.ReactNode }) => {
  const [cursorStyle, setCursorStyle] = useState<StateI>('normal')

  const setCursorToNormalStyle = () => setCursorStyle('normal')
  const setCursorToHoverStyle = () => setCursorStyle('hover')
  const setCursorToAccentStyle = () => setCursorStyle('hover-accent')

  const isNormal = cursorStyle === 'normal'
  const isHovered = cursorStyle === 'hover'
  const isAccented = cursorStyle === 'hover-accent'

  return (
    <CursorContext.Provider
      value={{ isNormal, setCursorToNormalStyle, setCursorToHoverStyle, setCursorToAccentStyle, isHovered, isAccented }}
    >
      {children}
    </CursorContext.Provider>
  )
}

const useCursorStyle = () => {
  const context = useContext(CursorContext)

  if (!context) {
    throw new Error('useCursorStyle must be used within a CursorStyleProvider')
  }

  return context
}

export { CursorStyleProvider, useCursorStyle }
