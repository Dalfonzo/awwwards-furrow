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
    isLockedWithAccent,
    isLockedWithInvertedAccent,
    x,
    y,
  } = useCursorStyle()

  useEffect(() => {
    const onMouseMoveHandler = (event: MouseEvent) => {
      const { current } = cursorRef
      if (!current) return
      current.style.left = isLockedWithAccent || isLockedWithInvertedAccent ? `${x}px` : `${event.pageX}px`
      current.style.top = isLockedWithAccent || isLockedWithInvertedAccent ? `${y}px` : `${event.pageY}px`
    }

    window.addEventListener('mousemove', onMouseMoveHandler)

    return () => {
      window.removeEventListener('mousemove', onMouseMoveHandler)
    }
  }, [isLockedWithAccent, isLockedWithInvertedAccent, x, y])

  return (
    <S.Cursor
      isHovered={isHovered}
      isHoveredWithAccent={isHoveredWithAccent}
      isHoveredWithInvertedAccent={isHoveredWithInvertedAccent}
      isNormal={isNormal}
      isNormalWithAccent={isNormalWithAccent}
      isNormalWithInvertedAccent={isNormalWithInvertedAccent}
      isLockedWithAccent={isLockedWithAccent}
      isLockedWithInvertedAccent={isLockedWithInvertedAccent}
      ref={cursorRef}
    />
  )
}

export default Cursor
