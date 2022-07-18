import { useEffect, useRef } from 'react'
import { useCursorStyle } from '~/context/cursorStyleContext'
import * as S from './Cursor.styles'

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null)
  const {
    isHovered,
    isHoveredWithAccent,
    isHoveredWithInvertedAccent,
    isNormal,
    isNormalWithAccent,
    isNormalWithInvertedAccent,
    isLocked,
    isLockedWithAccent,
    isLockedWithInvertedAccent,
    x,
    y,
  } = useCursorStyle()

  useEffect(() => {
    const onMouseMoveHandler = (event: MouseEvent) => {
      const { current } = cursorRef
      if (!current) return
      const cursorIsLocked = isLockedWithAccent || isLockedWithInvertedAccent || isLocked
      current.style.left = cursorIsLocked ? `${x}px` : `${event.pageX}px`
      current.style.top = cursorIsLocked ? `${y}px` : `${event.pageY}px`
    }

    window.addEventListener('mousemove', onMouseMoveHandler)

    return () => {
      window.removeEventListener('mousemove', onMouseMoveHandler)
    }
  }, [isLocked, isLockedWithAccent, isLockedWithInvertedAccent, x, y])

  return (
    <S.Cursor
      isHovered={isHovered}
      isHoveredWithAccent={isHoveredWithAccent}
      isHoveredWithInvertedAccent={isHoveredWithInvertedAccent}
      isNormal={isNormal}
      isNormalWithAccent={isNormalWithAccent}
      isNormalWithInvertedAccent={isNormalWithInvertedAccent}
      isLocked={isLocked}
      isLockedWithAccent={isLockedWithAccent}
      isLockedWithInvertedAccent={isLockedWithInvertedAccent}
      ref={cursorRef}
    />
  )
}

export default Cursor
