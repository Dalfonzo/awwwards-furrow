import { useState } from 'react'

export const useAnimationStatus = () => {
  const [isAnimationCompleted, setIsAnimationCompleted] = useState(false)
  const onAnimationComplete = () => setIsAnimationCompleted(true)
  const onAnimationStart = () => setIsAnimationCompleted(false)

  return { isAnimationCompleted, onAnimationComplete, onAnimationStart }
}
