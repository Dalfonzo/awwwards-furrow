import * as S from './MenuIcon.styles'

export interface MenuIconI {
  header?: boolean
  footer?: boolean
}

const MenuIcon = (props: MenuIconI) => <S.Menu {...props} />

export default MenuIcon
