import { useCursorStyle } from '~/context/cursorStyleContext'
import { useMenu } from '~/context/menuContext'
import { bottomToTopVariant, containerVariantProps } from '~/shared/variants'
import * as S from './AllProjects.styles'

const AllProjects = () => {
  const { setCursorStyle } = useCursorStyle()
  const { toggleMenu } = useMenu()

  return (
    <S.Container {...containerVariantProps}>
      <S.Button
        onMouseEnter={() => setCursorStyle('hover')}
        onMouseLeave={() => setCursorStyle('normal-accent')}
        onClick={toggleMenu}
        variants={bottomToTopVariant}
      >
        <p>All Projects</p>
        <S.Menu noLabel={true} />
      </S.Button>
    </S.Container>
  )
}

export default AllProjects
