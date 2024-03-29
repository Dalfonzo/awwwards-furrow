import { motion } from 'framer-motion'
import styled from 'styled-components'
import { Container as C, H2, H3, InnerContainer as IC } from '~/shared/styles/common.styles'
import { responsiveFontSize, responsiveProperty } from '~/shared/utils/responsiveProperties'

export const Container = styled(C)`
  ${responsiveProperty([{ maxSize: '305px', minSize: '80px', property: 'margin-top' }])};
  padding: 0;

  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`

export const InnerContainer = styled(IC)`
  ${responsiveProperty([{ maxSize: '100px', minSize: '16px', property: 'margin-right' }])};
`

export const Text = styled(H2)`
  margin: 0;
  max-width: 640px;
  margin-bottom: 210px;
  ${responsiveProperty([{ maxSize: '210px', minSize: '90px', property: 'margin-bottom' }])};
`

export const Video = styled.video`
  width: 100%;
  max-height: 480px;
  object-fit: cover;
`

export const Title = styled.h3`
  ${responsiveFontSize('60px', '120px')};
  text-transform: uppercase;
  font-weight: 900;
  line-height: 0.7;
`

export const BottomContent = styled.div`
  position: absolute;
  bottom: -120px;
`

export const VideoWrapper = styled(motion.div)`
  position: relative;

  &:hover div div p {
    opacity: 1;
  }

  & > div:last-child div span {
    overflow: hidden;
    width: 100px;
    display: block;
  }

  & > div:last-child div span svg {
    fill: currentColor;
    position: relative;
    transition: left 0.45s cubic-bezier(0.4, 0, 0.2, 1);
    transition-delay: 0s;
    left: -40px;
  }

  &:hover > div:last-child div span svg {
    left: 0;
  }
`

export const TopContent = styled.div`
  position: absolute;
  top: 80px;
  width: 100%;
  font-family: 'Presicav';
  color: ${(props) => props.theme.colors.text};
  font-weight: 700;

  & > div {
    display: flex;
  }
`

export const Header = styled(H3)``

export const Description = styled.p`
  font-size: 14px;
  margin-left: auto;
  opacity: 0;
  transition: opacity 0.45s cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: 0s;

  & > span {
    margin-left: 2.5rem;
  }
`
