/* eslint-disable react/display-name */
import React from 'react'
import * as S from './MenuIcon.styles'

export interface MenuIconI extends React.HTMLAttributes<HTMLDivElement> {
  header?: boolean
  footer?: boolean
  isMenuOpen: boolean
}

const MenuIcon = React.forwardRef<HTMLDivElement, MenuIconI>(({ isMenuOpen, ...rest }, ref) => (
  <S.MenuWrapper {...rest} isMenuOpen={isMenuOpen}>
    <S.MenuTitle>{isMenuOpen ? 'Close' : 'Projects'}</S.MenuTitle>
    <S.Menu ref={ref} isOpen={isMenuOpen} />
  </S.MenuWrapper>
))

export default MenuIcon
