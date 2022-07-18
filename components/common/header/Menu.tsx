import { ReactNode, useRef, useState } from 'react'
import { useCursorStyle } from '~/context/cursorStyleContext'
import { useElementPosition } from '~/hooks/useElementPosition'
import Socials from '../socials/Socials'
import * as S from './Menu.styles'

const Menu = ({ isMenuOpen, children }: { isMenuOpen: boolean; children: ReactNode }) => {
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

  return (
    <S.Wrapper isMenuOpen={isMenuOpen} onMouseEnter={() => setCursorStyle('normal')}>
      <S.Container>
        <S.Heading>
          <S.Title>Projects</S.Title>
          {children}
        </S.Heading>
        <S.List>
          {menuItems.map((item) => (
            <S.Item key={item.id} onMouseEnter={() => onMouseEnterHandler(item.id)} onMouseLeave={onMouseLeaveHandler}>
              {item.title}
            </S.Item>
          ))}
        </S.List>
        <S.VideoContainer ref={refElement}>
          <S.Reveal style={{ left }} />
          {menuItems.map((item) => (
            <S.Video
              key={item.id}
              src={item.videoSource}
              autoPlay
              loop
              muted
              playsInline
              isVisible={currentVideo === item.id}
            />
          ))}
        </S.VideoContainer>
        <S.MenuFooter>
          <p onMouseEnter={() => setCursorStyle('hover')} onMouseLeave={() => setCursorStyle('normal')}>
            info@furrow.studio
          </p>
          <p onMouseEnter={() => setCursorStyle('hover')} onMouseLeave={() => setCursorStyle('normal')}>
            +1.902.370.2449
          </p>
          <p>&copy; Furrow 2022</p>
          <Socials />
        </S.MenuFooter>
      </S.Container>
    </S.Wrapper>
  )
}

export default Menu
