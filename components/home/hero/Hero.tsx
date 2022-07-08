import { MouseEventHandler, useEffect, useRef, useState } from 'react'
import { useCursorStyle } from '~/context/cursorStyleContext'
import { useCustomTheme } from '~/context/themeContext'
import useWindowSize from '~/hooks/useWindowSize'
import * as S from './Hero.styles'

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null)
  const { height, width } = useWindowSize()
  const { isDarkMode } = useCustomTheme()
  const { setCursorToHoverStyle, setCursorToNormalStyle } = useCursorStyle()

  const [, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current

    if (!canvas) return

    ctxRef.current = canvas.getContext('2d')

    if (!ctxRef.current) return

    ctxRef.current.fillStyle = isDarkMode ? '#000' : '#FFF'
    ctxRef.current.fillRect(0, 0, width, height)
  }, [width, height, isDarkMode])

  const onMouseMoveHandler: MouseEventHandler<HTMLCanvasElement> = (event) => {
    const { pageX: currentX, pageY: currentY } = event

    if (!ctxRef.current) return

    ctxRef.current.globalCompositeOperation = 'destination-out'
    ctxRef.current.lineCap = 'round'
    ctxRef.current.lineWidth = 120

    setMousePosition((prevPosition) => {
      if (ctxRef.current) {
        ctxRef.current.beginPath()
        ctxRef.current.moveTo(prevPosition.x || currentX, prevPosition.y || currentY)
        ctxRef.current.lineTo(currentX, currentY)
        ctxRef.current.stroke()
      }

      return { x: currentX, y: currentY }
    })
  }

  return (
    <S.Container onMouseLeave={setCursorToNormalStyle} onMouseEnter={setCursorToHoverStyle}>
      <S.Video src="/assets/video/featured-video.mp4" autoPlay loop width={width} height={height} muted playsInline />
      <S.Canvas width={width} height={height} ref={canvasRef} onMouseMove={onMouseMoveHandler} />
      <S.H1>
        <span>DIG</span>
        <span>DEEP</span>
      </S.H1>
    </S.Container>
  )
}

export default Hero
