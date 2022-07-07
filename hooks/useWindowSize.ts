import { useCallback, useEffect, useState } from 'react'

export default function useWindowSize() {
  const isWindowAvailable = typeof window !== 'undefined'

  const getWindowSize = useCallback(() => {
    const width = isWindowAvailable ? window.innerWidth : 0
    const height = isWindowAvailable ? window.innerHeight : 0
    return { width, height }
  }, [isWindowAvailable])

  const [{ height, width }, setWindowSize] = useState({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    setWindowSize(getWindowSize())
  }, [getWindowSize])

  useEffect(() => {
    if (!isWindowAvailable) return

    function handleResize() {
      setWindowSize(getWindowSize())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isWindowAvailable, getWindowSize])

  return { height, width }
}
