import { motion } from 'framer-motion'
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
  const { setCursorStyle } = useCursorStyle()

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

  const containerVariant = {
    hidden: {
      opacity: 1,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const titleVariant = {
    hidden: { top: '800px' },
    visible: {
      top: '0px',
      transition: {
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  }

  return (
    <S.Container
      onMouseLeave={() => setCursorStyle('normal-accent')}
      onMouseEnter={() => setCursorStyle('hover-accent')}
    >
      <S.Video src="/assets/video/featured-video.mp4" autoPlay loop width={width} height={height} muted playsInline />
      <S.Canvas width={width} height={height} ref={canvasRef} onMouseMove={onMouseMoveHandler} />
      <S.H1 variants={containerVariant} initial="hidden" animate="visible">
        <motion.span variants={titleVariant}>DIG</motion.span>
        <motion.span variants={titleVariant}>DEEP</motion.span>
      </S.H1>
    </S.Container>
  )
}

export default Hero
