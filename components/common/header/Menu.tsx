import { AnimatePresence } from 'framer-motion'
import { ReactNode, useRef, useState } from 'react'
import { useCursorStyle } from '~/context/cursorStyleContext'
import { useElementPosition } from '~/hooks/useElementPosition'
import { ArrowRightIcon } from '../icons'
import Socials from '../socials/Socials'
import * as S from './Menu.styles'

interface MenuI {
  isMenuOpen: boolean
  children: ReactNode
  onAnimationComplete(): void
  onAnimationStart(): void
  isAnimationCompleted: boolean
}

const Menu = ({ isMenuOpen, children, onAnimationComplete, onAnimationStart, isAnimationCompleted }: MenuI) => {
  const { setCursorStyle } = useCursorStyle()
  const refElement = useRef<HTMLDivElement>(null)
  const { left } = useElementPosition({ elementRef: refElement })
  const [currentVideo, setCurrentVideo] = useState(-1)

  const onMouseEnterHandler = (id: number) => {
    setCurrentVideo(id)
    setCursorStyle('hover')
  }

  const onMouseLeaveHandler = () => {
    setCursorStyle('normal')
    setCurrentVideo(-1)
  }

  const menuItems = [
    {
      id: 1,
      title: 'legendary red',
      videoSource: '/assets/video/featured-video.mp4',
    },
    {
      id: 2,
      title: 'made to enjoy',
      videoSource: '/assets/video/easy.mp4',
    },
    {
      id: 3,
      title: 'not humble',
      videoSource: '/assets/video/video.mp4',
    },
    {
      id: 4,
      title: '50 beaches',
      videoSource: '/assets/video/50-beaches.mp4',
    },
    {
      id: 5,
      title: 'make it zero',
      videoSource: '/assets/video/make-it-zero.mp4',
    },
  ]

  const containerVariant = {
    hidden: { left: '-110%', transition: { duration: 0.7, ease: [0.6, 0.05, -0.01, 0.8] } },
    visible: { left: '0', transition: { duration: 0.7, ease: [0.6, 0.05, -0.01, 0.8], staggerChildren: 0.1 } },
  }

  const childVariants = {
    visible: { opacity: 1, marginLeft: '0px', transition: { duration: 0.8 } },
    hidden: { opacity: 0, marginLeft: '-20%' },
  }

  return (
    <AnimatePresence>
      <S.Wrapper
        onMouseEnter={() => setCursorStyle('normal')}
        initial={'hidden'}
        exit={'visible'}
        animate={isMenuOpen ? 'visible' : 'hidden'}
        variants={containerVariant}
        onAnimationComplete={onAnimationComplete}
        onAnimationStart={onAnimationStart}
      >
        <S.Container>
          <S.Heading>
            <S.Title>Projects</S.Title>
            {children}
          </S.Heading>
          <S.List>
            {menuItems.map((item) => (
              <S.Item
                key={item.id}
                onMouseEnter={() => onMouseEnterHandler(item.id)}
                onMouseLeave={onMouseLeaveHandler}
                variants={childVariants}
                initial={{ opacity: 0, marginLeft: '-20%' }}
              >
                <AnimatePresence>
                  {currentVideo === item.id && (
                    <S.Icon
                      initial={{ width: '0px' }}
                      exit={{ width: '0px' }}
                      animate={{
                        width: '4rem',
                      }}
                      transition={{ duration: 0.1, ease: 'easeInOut' }}
                    >
                      <ArrowRightIcon width="6rem" />
                    </S.Icon>
                  )}
                </AnimatePresence>
                <S.IconText>{item.title}</S.IconText>
              </S.Item>
            ))}
          </S.List>
          <S.VideoContainer ref={refElement}>
            <AnimatePresence>
              {currentVideo !== -1 && (
                <S.Reveal
                  style={{ left }}
                  initial={{ width: '100%' }}
                  exit={{ width: '100%' }}
                  animate={{
                    width: 0,
                  }}
                  transition={{ duration: 0.2, ease: 'easeInOut' }}
                />
              )}
            </AnimatePresence>
            {menuItems.map((item) => (
              <AnimatePresence key={item.id}>
                {currentVideo === item.id && (
                  <S.Video
                    key={item.id}
                    src={item.videoSource}
                    autoPlay
                    loop
                    muted
                    playsInline
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 1 }}
                    animate={{
                      opacity: 1,
                    }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                  />
                )}
              </AnimatePresence>
            ))}
          </S.VideoContainer>
          <S.MenuFooter>
            <p onMouseEnter={() => setCursorStyle('hover')} onMouseLeave={() => setCursorStyle('normal')}>
              info@furrow.studio
            </p>
            <p onMouseEnter={() => setCursorStyle('hover')} onMouseLeave={() => setCursorStyle('normal')}>
              +1.902.370.2449
            </p>
            <S.Address>
              77 Grafton Street <br /> Charlottetown, PE C1A 1K8
            </S.Address>
            <S.BottomContainer>
              <p>&copy; Furrow 2022</p>
              <Socials isAnimationCompleted={isAnimationCompleted} />
            </S.BottomContainer>
          </S.MenuFooter>
        </S.Container>
      </S.Wrapper>
    </AnimatePresence>
  )
}

export default Menu
