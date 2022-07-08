import { useEffect, useRef } from 'react'
import { useCursorStyle } from '~/context/cursorStyleContext'
import * as S from './Cursor.styles'

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null)
  const { isAccented, isNormal, isHovered } = useCursorStyle()

  useEffect(() => {
    const onMouseMoveHandler = (event: MouseEvent) => {
      const { current } = cursorRef
      if (!current) return
      current.style.left = `${event.pageX}px`
      current.style.top = `${event.pageY}px`
    }

    window.addEventListener('mousemove', onMouseMoveHandler)

    return () => {
      window.removeEventListener('mousemove', onMouseMoveHandler)
    }
  }, [])

  return <S.Cursor accent={isAccented} normal={isNormal} hover={isHovered} ref={cursorRef} />
}

export default Cursor
