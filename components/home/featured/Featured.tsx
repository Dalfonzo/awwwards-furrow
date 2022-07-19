import { motion } from 'framer-motion'
import ArrowRightIcon from '~/components/common/icons/ArrowRightIcon'
import { useCursorStyle } from '~/context/cursorStyleContext'
import { bottomToTopVariant, containerVariantProps } from '~/shared/variants'
import * as S from './Featured.styles'

const Featured = () => {
  const { setCursorStyle } = useCursorStyle()

  return (
    <S.Container as={'section'}>
      <S.InnerContainer spaceAsMargin {...containerVariantProps}>
        <S.Text variants={bottomToTopVariant}>
          Great stories don’t just happen— they need to be uncovered. And we dig deep to discover the great stories that
          lie just below the surface. Dirt under our fingernails and all.
        </S.Text>
      </S.InnerContainer>
      <motion.div {...containerVariantProps}>
        <S.VideoWrapper
          variants={bottomToTopVariant}
          onMouseEnter={() => setCursorStyle('hover-accent')}
          onMouseLeave={() => setCursorStyle('normal-accent')}
        >
          <S.Video src="/assets/video/featured-video.mp4" autoPlay loop muted playsInline />
          <S.TopContent>
            <S.InnerContainer spaceAsPadding>
              <S.Header>Featured Project</S.Header>
              <S.Description>
                Lobster PEI <span>2020</span>
              </S.Description>
            </S.InnerContainer>
          </S.TopContent>
          <S.InnerContainer spaceAsMargin>
            <S.BottomContent>
              <S.Title>
                red <br />
                runs deep
              </S.Title>
              <span>
                <ArrowRightIcon />
              </span>
            </S.BottomContent>
          </S.InnerContainer>
        </S.VideoWrapper>
      </motion.div>
    </S.Container>
  )
}

export default Featured
