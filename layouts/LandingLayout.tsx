import Cursor from '~/components/common/cursor/Cursor'
import Header from '~/components/common/header/Header'

const LandingLayout: React.FC<{ children: JSX.Element }> = ({ children }) => {
  return (
    <>
      <Header />
      <Cursor />
      {children}
    </>
  )
}

export default LandingLayout
