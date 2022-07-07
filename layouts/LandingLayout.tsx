import Cursor from '~/components/cursor/Cursor'
import Header from '~/components/header/Header'

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
