import { useRef } from 'react'
import { useCursorStyle } from '~/context/cursorStyleContext'
import { useElementPosition } from '~/hooks/useElementPosition'
import { LogoIcon, MenuIcon } from '../icons'
import * as S from './Header.styles'

const Header = ({ asFooter }: { asFooter: boolean }) => {
  const menuIconRef = useRef<HTMLDivElement>(null)
  const { x, y } = useElementPosition({ elementRef: menuIconRef })
  const { setCursorStyle, setCursorPosition } = useCursorStyle()

  const onMouseEnterHandler = () => {
    setCursorPosition({ x, y })
    setCursorStyle('locked-accent')
  }

  return (
    <S.Header>
      <S.Container>
        <LogoIcon header={!asFooter} footer={asFooter} />
        <MenuIcon
          header={!asFooter}
          footer={asFooter}
          onMouseEnter={onMouseEnterHandler}
          onMouseLeave={() => setCursorStyle('normal-accent')}
          ref={menuIconRef}
        />
      </S.Container>
    </S.Header>
  )
}

export default Header
