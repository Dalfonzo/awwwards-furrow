import { createContext, useContext, useState } from 'react'

type StateI = 'normal' | 'normal-accent' | 'normal-inverted-accent' | 'hover' | 'hover-accent' | 'hover-inverted-accent'

interface CursorContextI {
  isHovered: boolean
  isHoveredWithAccent: boolean
  isHoveredWithInvertedAccent: boolean
  isNormal: boolean
  isNormalWithAccent: boolean
  isNormalWithInvertedAccent: boolean
  setCursorToNormalStyle(): void
  setCursorToHoverStyle(): void
  setCursorToNormalAccentStyle(): void
  setCursorToNormalInvertedAccentStyle(): void
  setCursorToHoverAccentStyle(): void
  setCursorToHoverInvertedAccentStyle(): void
}

const CursorContext = createContext<CursorContextI | null>(null)

const CursorStyleProvider = ({ children }: { children: React.ReactNode }) => {
  const [cursorStyle, setCursorStyle] = useState<StateI>('normal')

  const setCursorToHoverAccentStyle = () => setCursorStyle('hover-accent')
  const setCursorToHoverInvertedAccentStyle = () => setCursorStyle('hover-inverted-accent')
  const setCursorToHoverStyle = () => setCursorStyle('hover')
  const setCursorToNormalAccentStyle = () => setCursorStyle('normal-accent')
  const setCursorToNormalInvertedAccentStyle = () => setCursorStyle('normal-inverted-accent')
  const setCursorToNormalStyle = () => setCursorStyle('normal')

  const isHovered = cursorStyle === 'hover'
  const isHoveredWithAccent = cursorStyle === 'hover-accent'
  const isHoveredWithInvertedAccent = cursorStyle === 'hover-inverted-accent'
  const isNormal = cursorStyle === 'normal'
  const isNormalWithAccent = cursorStyle === 'normal-accent'
  const isNormalWithInvertedAccent = cursorStyle === 'normal-inverted-accent'

  return (
    <CursorContext.Provider
      value={{
        isHovered,
        isHoveredWithAccent,
        isHoveredWithInvertedAccent,
        isNormal,
        isNormalWithAccent,
        isNormalWithInvertedAccent,
        setCursorToHoverAccentStyle,
        setCursorToHoverInvertedAccentStyle,
        setCursorToHoverStyle,
        setCursorToNormalAccentStyle,
        setCursorToNormalInvertedAccentStyle,
        setCursorToNormalStyle,
      }}
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
