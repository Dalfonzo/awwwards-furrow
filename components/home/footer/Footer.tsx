import { FacebookIcon, InstagramIcon, VimeoIcon } from '~/components/common/icons'
import { useCursorStyle } from '~/context/cursorStyleContext'
import * as S from './Footer.styles'

const Footer = () => {
  const { setCursorToHoverAccentStyle, setCursorToNormalAccentStyle } = useCursorStyle()

  return (
    <S.Container>
      <div>
        <S.Text onMouseEnter={setCursorToHoverAccentStyle} onMouseLeave={setCursorToNormalAccentStyle}>
          +1.902.370.2449
        </S.Text>
        <S.Text onMouseEnter={setCursorToHoverAccentStyle} onMouseLeave={setCursorToNormalAccentStyle}>
          info@furrow.studio
        </S.Text>
      </div>
      <div>
        <S.Text>77 Grafton Street</S.Text>
        <S.Text>Charlottetown, PE C1A 1K8</S.Text>
      </div>
      <div>
        <InstagramIcon onMouseEnter={setCursorToHoverAccentStyle} onMouseLeave={setCursorToNormalAccentStyle} />
        <FacebookIcon onMouseEnter={setCursorToHoverAccentStyle} onMouseLeave={setCursorToNormalAccentStyle} />
        <VimeoIcon onMouseEnter={setCursorToHoverAccentStyle} onMouseLeave={setCursorToNormalAccentStyle} />
      </div>
    </S.Container>
  )
}

export default Footer
