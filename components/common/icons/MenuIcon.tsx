/* eslint-disable react/display-name */
import React from 'react'
import * as S from './MenuIcon.styles'

export interface MenuIconI extends React.HTMLAttributes<HTMLDivElement> {
  header?: boolean
  footer?: boolean
}

const MenuIcon = React.forwardRef<HTMLDivElement, MenuIconI>((props, ref) => <S.Menu {...props} ref={ref} />)

export default MenuIcon
