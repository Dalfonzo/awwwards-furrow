import { LogoIcon, MenuIcon } from '../icons'
import * as S from './Header.styles'

const Header = () => {
  return (
    <S.Header>
      <S.Container>
        <LogoIcon header />
        <MenuIcon header />
      </S.Container>
    </S.Header>
  )
}

export default Header
