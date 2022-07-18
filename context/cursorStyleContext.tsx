import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react'

type CursorStyleStateI =
  | 'normal'
  | 'normal-accent'
  | 'normal-inverted-accent'
  | 'hover'
  | 'hover-accent'
  | 'hover-inverted-accent'
  | 'locked'
  | 'locked-accent'
  | 'locked-inverted-accent'

interface CursorPositionStateI {
  x: number
  y: number
}

interface CursorContextI extends CursorPositionStateI {
  isHovered: boolean
  isHoveredWithAccent: boolean
  isHoveredWithInvertedAccent: boolean
  isNormal: boolean
  isNormalWithAccent: boolean
  isNormalWithInvertedAccent: boolean
  isLocked: boolean
  isLockedWithAccent: boolean
  isLockedWithInvertedAccent: boolean
  setCursorStyle: Dispatch<SetStateAction<CursorStyleStateI>>
  setCursorPosition: Dispatch<SetStateAction<CursorPositionStateI>>
}

const CursorContext = createContext<CursorContextI | null>(null)

const CursorStyleProvider = ({ children }: { children: React.ReactNode }) => {
  const [cursorStyle, setCursorStyle] = useState<CursorStyleStateI>('normal')
  const [{ x, y }, setCursorPosition] = useState<CursorPositionStateI>({ x: 0, y: 0 })

  const isHovered = cursorStyle === 'hover'
  const isHoveredWithAccent = cursorStyle === 'hover-accent'
  const isHoveredWithInvertedAccent = cursorStyle === 'hover-inverted-accent'
  const isNormal = cursorStyle === 'normal'
  const isNormalWithAccent = cursorStyle === 'normal-accent'
  const isNormalWithInvertedAccent = cursorStyle === 'normal-inverted-accent'
  const isLocked = cursorStyle === 'locked'
  const isLockedWithAccent = cursorStyle === 'locked-accent'
  const isLockedWithInvertedAccent = cursorStyle === 'locked-inverted-accent'

  return (
    <CursorContext.Provider
      value={{
        isHovered,
        isHoveredWithAccent,
        isHoveredWithInvertedAccent,
        isLocked,
        isLockedWithAccent,
        isLockedWithInvertedAccent,
        isNormal,
        isNormalWithAccent,
        isNormalWithInvertedAccent,
        setCursorStyle,
        x,
        y,
        setCursorPosition,
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
