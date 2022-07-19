/* eslint-disable react/display-name */
import React from 'react'
import { bottomToTopHeaderVariant, topToBottomHeaderVariant } from '~/shared/variants'
import * as S from './MenuIcon.styles'

export interface MenuIconI extends React.HTMLAttributes<HTMLDivElement> {
  header?: boolean
  footer?: boolean
  noLabel?: boolean
  [name: string]: unknown
}

const MenuIcon = React.forwardRef<HTMLDivElement, MenuIconI>(({ noLabel, ...rest }, ref) => (
  <S.MenuWrapper
    {...rest}
    variants={noLabel ? null : rest.header ? topToBottomHeaderVariant : bottomToTopHeaderVariant}
  >
    {!noLabel && <S.MenuTitle>Projects</S.MenuTitle>}
    <S.Menu ref={ref} />
  </S.MenuWrapper>
))

export default MenuIcon
