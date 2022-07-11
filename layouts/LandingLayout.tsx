import Cursor from '~/components/common/cursor/Cursor'
import Header from '~/components/common/header/Header'

const LandingLayout: React.FC<{ children: JSX.Element }> = ({ children }) => {
  return (
    <>
      <Header asFooter={false} />
      <Cursor />
      {children}
      <Header asFooter={true} />
    </>
  )
}

export default LandingLayout
