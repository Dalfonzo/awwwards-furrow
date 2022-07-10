import { useCursorStyle } from '~/context/cursorStyleContext'
import * as S from './AllProjects.styles'

const AllProjects = () => {
  const { setCursorToHoverStyle, setCursorToNormalAccentStyle } = useCursorStyle()

  return (
    <S.Container>
      <S.Button onMouseEnter={setCursorToHoverStyle} onMouseLeave={setCursorToNormalAccentStyle}>
        <p>All Projects</p>
        <S.Menu />
      </S.Button>
    </S.Container>
  )
}

export default AllProjects
