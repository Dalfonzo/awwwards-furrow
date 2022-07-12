import { useRef } from 'react'
import { FacebookIcon, InstagramIcon, VimeoIcon } from '~/components/common/icons'
import { useCursorStyle } from '~/context/cursorStyleContext'
import { useElementPosition } from '~/hooks/useElementPosition'
import * as S from './Footer.styles'

const Footer = () => {
  const instagramIconRef = useRef<HTMLElement>(null)
  const vimeoIconRef = useRef<HTMLElement>(null)
  const facebookIconRef = useRef<HTMLElement>(null)
  const { x: instagramX, y: instagramY } = useElementPosition({ elementRef: instagramIconRef })
  const { x: vimeoX, y: vimeoY } = useElementPosition({ elementRef: vimeoIconRef })
  const { x: facebookX, y: facebookY } = useElementPosition({ elementRef: facebookIconRef })
  const { setCursorStyle, setCursorPosition } = useCursorStyle()

  const onMouseEnterHandler = ({ x, y }: { x: number; y: number }) => {
    setCursorPosition({ x, y })
    setCursorStyle('locked-accent')
  }

  return (
    <S.Container>
      <div>
        <S.Text
          onMouseEnter={() => setCursorStyle('hover-accent')}
          onMouseLeave={() => setCursorStyle('normal-accent')}
        >
          +1.902.370.2449
        </S.Text>
        <S.Text
          onMouseEnter={() => setCursorStyle('hover-accent')}
          onMouseLeave={() => setCursorStyle('normal-accent')}
        >
          info@furrow.studio
        </S.Text>
      </div>
      <div>
        <S.Text>77 Grafton Street</S.Text>
        <S.Text>Charlottetown, PE C1A 1K8</S.Text>
      </div>
      <div>
        <span
          onMouseEnter={() => onMouseEnterHandler({ x: instagramX, y: instagramY })}
          onMouseLeave={() => setCursorStyle('normal-accent')}
          ref={instagramIconRef}
        >
          <InstagramIcon />
        </span>
        <span
          onMouseEnter={() => onMouseEnterHandler({ x: facebookX, y: facebookY })}
          onMouseLeave={() => setCursorStyle('normal-accent')}
          ref={facebookIconRef}
        >
          <FacebookIcon />
        </span>
        <span
          onMouseEnter={() => onMouseEnterHandler({ x: vimeoX, y: vimeoY })}
          onMouseLeave={() => setCursorStyle('normal-accent')}
          ref={vimeoIconRef}
        >
          <VimeoIcon />
        </span>
      </div>
    </S.Container>
  )
}

export default Footer
