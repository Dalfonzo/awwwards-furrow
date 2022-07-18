import Cursor from '~/components/common/cursor/Cursor'
import Header from '~/components/common/header/Header'
import { useCursorStyle } from '~/context/cursorStyleContext'

const LandingLayout: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { setCursorStyle } = useCursorStyle()

  return (
    <div onMouseEnter={() => setCursorStyle('normal-accent')}>
      <Header asFooter={false} />
      <Cursor />
      {children}
      <Header asFooter={true} />
    </div>
  )
}

export default LandingLayout
