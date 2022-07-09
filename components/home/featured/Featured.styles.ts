import styled from 'styled-components'
import { Container as C, InnerContainer as IC } from '~/shared/styles/common.styles'

export const Container = styled(C)`
  margin-top: 305px;
`

export const InnerContainer = styled(IC)``

export const Text = styled.h2`
  font-size: 2.625rem;
  font-weight: 500;
  line-height: 1;
  margin: 0;
  max-width: 640px;
  margin-bottom: 210px;
`

export const Video = styled.video`
  width: 100%;
  max-height: 480px;
  object-fit: cover;
`

export const Title = styled.h3`
  font-size: 7.5rem;
  text-transform: uppercase;
  font-weight: 900;
  line-height: 0.7;
`

export const BottomContent = styled.div`
  position: absolute;
  bottom: -120px;
`

export const VideoWrapper = styled.div`
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

export const Header = styled.h3`
  font-size: 20px;
`

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
