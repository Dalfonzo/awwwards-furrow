import { useRef } from 'react'
import { useCursorStyle } from '~/context/cursorStyleContext'
import { useMenu } from '~/context/menuContext'
import { useElementPosition } from '~/hooks/useElementPosition'
import { containerHeaderVariantProps } from '~/shared/variants'
import { CloseIcon, LogoIcon, MenuIcon } from '../icons'
import * as S from './Header.styles'
import Menu from './Menu'

const Header = ({ asFooter }: { asFooter: boolean }) => {
  const closedMenuIconRef = useRef<HTMLDivElement>(null)
  const openedMenuIconRef = useRef<HTMLDivElement>(null)
  const { isMenuOpen, toggleMenu } = useMenu()
  const { setCursorStyle, setCursorPosition } = useCursorStyle()
  const { x: openedMenuX, y: openedMenuY } = useElementPosition({ elementRef: openedMenuIconRef, deps: [isMenuOpen] })
  const { x: closedMenuX, y: closedMenuY } = useElementPosition({ elementRef: closedMenuIconRef, deps: [isMenuOpen] })

  const onMouseEnterHandler = ({ accent = true, x, y }: { accent: boolean; x: number; y: number }) => {
    setCursorPosition({ x, y })
    setCursorStyle(accent ? 'locked-accent' : 'locked')
  }

  return (
    <S.Header {...containerHeaderVariantProps} style={{ height: !asFooter ? '0px' : '1px' }}>
      <S.Container>
        <LogoIcon header={!asFooter} footer={asFooter} />
        <MenuIcon
          footer={asFooter}
          header={!asFooter}
          onClick={toggleMenu}
          onMouseEnter={() => onMouseEnterHandler({ accent: true, x: closedMenuX, y: closedMenuY })}
          onMouseLeave={() => setCursorStyle('normal-accent')}
          ref={closedMenuIconRef}
        />
        <Menu isMenuOpen={isMenuOpen}>
          <CloseIcon
            onClick={toggleMenu}
            onMouseEnter={() => onMouseEnterHandler({ accent: false, x: openedMenuX, y: openedMenuY })}
            onMouseLeave={() => setCursorStyle('normal')}
            ref={openedMenuIconRef}
          />
        </Menu>
      </S.Container>
    </S.Header>
  )
}

export default Header
