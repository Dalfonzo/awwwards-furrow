import { motion } from 'framer-motion'
import styled from 'styled-components'
import { Container as C, H3 } from '~/shared/styles/common.styles'
import { responsiveFontSize } from '~/shared/utils/responsiveProperties'

export const Wrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.colors.accent};
  color: ${(props) => props.theme.colors.background};
`

export const Container = styled(C)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  position: relative;
`

export const List = styled.ul`
  ${responsiveFontSize('28px', '57px')};
  font-weight: 900;
  text-transform: uppercase;
  list-style: none;
`

export const Item = styled(motion.li)`
  width: fit-content;
  display: flex;
  justify-content: center;
  padding: 0.5rem 0;
  fill: currentColor;

  & > p {
    margin-left: 0.3rem;
  }
`
export const IconText = styled.span`
  line-height: 0.8em;
  padding-top: 1rem;
  margin-left: 0.3rem;
`

export const Icon = styled(motion.span)`
  overflow: hidden;

  position: relative;

  & > svg {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`

export const Heading = styled.div`
  padding: 3.2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled(H3)`
  font-family: 'Presicav';
`

export const VideoContainer = styled.div`
  height: 100%;
  left: 250px;
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;

  @media (max-width: 1024px) {
    display: none;
  }
`

export const Reveal = styled(motion.div)`
  background: ${(props) => props.theme.colors.accent};
  bottom: 0;
  left: 0;
  position: fixed;
  top: 0;
  z-index: 1;
`

export const Video = styled(motion.video)`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
`

export const MenuFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 0;
  ${responsiveFontSize('14px', '20px')};

  @media (max-width: 1024px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 0.5rem;
  }

  & p {
    line-height: 1.0714285714;
    font-family: 'Presicav', sans-serif;
    font-weight: 700;
    margin-right: 2rem;

    &:last-of-type {
      font-size: 0.8em;
    }
  }

  & p:hover:not(:last-of-type) {
    color: ${(props) => props.theme.colors.text};
  }

  & div:last-child {
    & span:hover > svg {
      fill: ${(props) => props.theme.colors.text};
    }

    & span > * {
      fill: ${(props) => props.theme.colors.background};
    }
  }
`

export const BottomContainer = styled.div`
  ${responsiveFontSize('14px', '20px')};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 1024px) {
    flex-direction: row-reverse;
  }
`

export const Address = styled.p`
  @media (min-width: 1024px) {
    display: none;
  }
`
