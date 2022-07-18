import { useRef } from 'react'
import { FacebookIcon, InstagramIcon, VimeoIcon } from '~/components/common/icons'
import { useCursorStyle } from '~/context/cursorStyleContext'
import { useMenu } from '~/context/menuContext'
import { useElementPosition } from '~/hooks/useElementPosition'
import * as S from './Socials.styles'

const Socials = ({ accentColor }: { accentColor?: boolean }) => {
  const instagramIconRef = useRef<HTMLElement>(null)
  const { isMenuOpen } = useMenu()
  const vimeoIconRef = useRef<HTMLElement>(null)
  const facebookIconRef = useRef<HTMLElement>(null)
  const { x: instagramX, y: instagramY } = useElementPosition({ elementRef: instagramIconRef, deps: [isMenuOpen] })
  const { x: vimeoX, y: vimeoY } = useElementPosition({ elementRef: vimeoIconRef, deps: [isMenuOpen] })
  const { x: facebookX, y: facebookY } = useElementPosition({ elementRef: facebookIconRef, deps: [isMenuOpen] })
  const { setCursorStyle, setCursorPosition } = useCursorStyle()

  const onMouseEnterHandler = ({ x, y }: { x: number; y: number }) => {
    setCursorPosition({ x, y })
    setCursorStyle(accentColor ? 'locked-accent' : 'locked')
  }

  return (
    <S.Container accentColor={accentColor}>
      <span
        onMouseEnter={() => onMouseEnterHandler({ x: instagramX, y: instagramY })}
        onMouseLeave={() => setCursorStyle(accentColor ? 'normal-accent' : 'normal')}
        ref={instagramIconRef}
      >
        <InstagramIcon />
      </span>
      <span
        onMouseEnter={() => onMouseEnterHandler({ x: facebookX, y: facebookY })}
        onMouseLeave={() => setCursorStyle(accentColor ? 'normal-accent' : 'normal')}
        ref={facebookIconRef}
      >
        <FacebookIcon />
      </span>
      <span
        onMouseEnter={() => onMouseEnterHandler({ x: vimeoX, y: vimeoY })}
        onMouseLeave={() => setCursorStyle(accentColor ? 'normal-accent' : 'normal')}
        ref={vimeoIconRef}
      >
        <VimeoIcon />
      </span>
    </S.Container>
  )
}

export default Socials
