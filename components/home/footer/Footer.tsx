import Socials from '~/components/common/socials/Socials'
import { useCursorStyle } from '~/context/cursorStyleContext'
import * as S from './Footer.styles'

const Footer = () => {
  const { setCursorStyle } = useCursorStyle()

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
      <Socials accentColor />
    </S.Container>
  )
}

export default Footer
