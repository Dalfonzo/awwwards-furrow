import { RefObject, useEffect, useState } from 'react'
import useWindowSize from './useWindowSize'

export const useElementPosition = ({ elementRef }: { elementRef: RefObject<HTMLElement> }) => {
  const { height, width } = useWindowSize()
  const [elementPosition, setElementPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const element = elementRef.current

    if (!element) return

    const x = element.getBoundingClientRect().left + document.documentElement.scrollLeft + element.offsetWidth / 2
    const y = element.getBoundingClientRect().top + document.documentElement.scrollTop + element.offsetHeight / 2
    setElementPosition({ x, y })
  }, [elementRef, height, width])

  return { x: elementPosition.x, y: elementPosition.y }
}
