import Link from 'next/link'
import ArrowRightIcon from '~/components/common/icons/ArrowRightIcon'
import { useCursorStyle } from '~/context/cursorStyleContext'
import * as S from './Featured.styles'

const Featured = () => {
  const { setCursorToHoverAccentStyle, setCursorToNormalAccentStyle } = useCursorStyle()

  return (
    <S.Container as={'section'}>
      <S.InnerContainer spaceAsMargin>
        <S.Text>
          Great stories don’t just happen— they need to be uncovered. And we dig deep to discover the great stories that
          lie just below the surface. Dirt under our fingernails and all.
        </S.Text>
      </S.InnerContainer>
      <Link href="#">
        <S.VideoWrapper onMouseEnter={setCursorToHoverAccentStyle} onMouseLeave={setCursorToNormalAccentStyle}>
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
      </Link>
    </S.Container>
  )
}

export default Featured
