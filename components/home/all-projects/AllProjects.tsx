import { useCursorStyle } from '~/context/cursorStyleContext'
import { useMenu } from '~/context/menuContext'
import * as S from './AllProjects.styles'

const AllProjects = () => {
  const { setCursorStyle } = useCursorStyle()
  const { isMenuOpen, toggleMenu } = useMenu()

  return (
    <S.Container>
      <S.Button
        onMouseEnter={() => setCursorStyle('hover')}
        onMouseLeave={() => setCursorStyle('normal-accent')}
        onClick={toggleMenu}
      >
        <p>All Projects</p>
        <S.Menu isMenuOpen={isMenuOpen} noLabel={true} />
      </S.Button>
    </S.Container>
  )
}

export default AllProjects
