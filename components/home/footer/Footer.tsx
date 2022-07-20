import { motion } from 'framer-motion'
import Socials from '~/components/common/socials/Socials'
import { useCursorStyle } from '~/context/cursorStyleContext'
import { useAnimationStatus } from '~/hooks/useAnimationStatus'
import { bottomToTopVariant, containerVariantProps } from '~/shared/variants'
import * as S from './Footer.styles'

const Footer = () => {
  const { setCursorStyle } = useCursorStyle()
  const { isAnimationCompleted, onAnimationComplete } = useAnimationStatus()

  return (
    <S.Container {...containerVariantProps} onAnimationComplete={onAnimationComplete}>
      <motion.div variants={bottomToTopVariant}>
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
      </motion.div>
      <motion.div variants={bottomToTopVariant}>
        <S.Text>77 Grafton Street</S.Text>
        <S.Text>Charlottetown, PE C1A 1K8</S.Text>
      </motion.div>
      <motion.div variants={bottomToTopVariant}>
        <Socials accentColor isAnimationCompleted={isAnimationCompleted} />
      </motion.div>
    </S.Container>
  )
}

export default Footer
