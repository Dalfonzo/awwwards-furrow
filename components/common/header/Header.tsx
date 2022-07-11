import { LogoIcon, MenuIcon } from '../icons'
import * as S from './Header.styles'

const Header = ({ asFooter }: { asFooter: boolean }) => {
  return (
    <S.Header>
      <S.Container>
        <LogoIcon header={!asFooter} footer={asFooter} />
        <MenuIcon header={!asFooter} footer={asFooter} />
      </S.Container>
    </S.Header>
  )
}

export default Header
