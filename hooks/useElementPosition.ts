import { RefObject, useEffect, useState } from 'react'
import { useLayoutDimensions } from '~/context/layoutDimensionsContext'

export const useElementPosition = ({ elementRef }: { elementRef: RefObject<HTMLElement> }) => {
  const { height, width } = useLayoutDimensions()
  const [elementPosition, setElementPosition] = useState({ x: 0, y: 0, left: 0, top: 0 })

  useEffect(() => {
    const element = elementRef.current

    if (!element) return

    const x = element.getBoundingClientRect().left + document.documentElement.scrollLeft + element.offsetWidth / 2
    const y = element.getBoundingClientRect().top + document.documentElement.scrollTop + element.offsetHeight / 2
    const left = element.getBoundingClientRect().left
    const top = element.getBoundingClientRect().top
    setElementPosition({ x, y, left, top })
  }, [elementRef, height, width])

  return { x: elementPosition.x, y: elementPosition.y, left: elementPosition.left, top: elementPosition.top }
}
