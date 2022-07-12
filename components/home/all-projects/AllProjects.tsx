import { useCursorStyle } from '~/context/cursorStyleContext'
import * as S from './AllProjects.styles'

const AllProjects = () => {
  const { setCursorStyle } = useCursorStyle()

  return (
    <S.Container>
      <S.Button onMouseEnter={() => setCursorStyle('hover')} onMouseLeave={() => setCursorStyle('normal-accent')}>
        <p>All Projects</p>
        <S.Menu />
      </S.Button>
    </S.Container>
  )
}

export default AllProjects
