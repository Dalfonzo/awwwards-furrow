import styled, { css } from 'styled-components'
import { Container as C, H3 } from '~/shared/styles/common.styles'

export const Wrapper = styled.div<{ isMenuOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${(props) => props.theme.colors.accent};
  color: ${(props) => props.theme.colors.primary};

  ${(props) =>
    !props.isMenuOpen &&
    css`
      display: none;
    `};
`

export const Container = styled(C)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  position: relative;
`

export const List = styled.ul`
  font-size: 3.5625rem;
  line-height: 1.5964912281;
  font-weight: 900;
  text-transform: uppercase;
  list-style: none;
`

export const Item = styled.li`
  width: fit-content;
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
`

interface VideoI {
  isVisible: boolean
}

export const Reveal = styled.div`
  background: ${(props) => props.theme.colors.accent};
  bottom: 0;
  left: 0;
  position: fixed;
  top: 0;
`

export const Video = styled.video<VideoI>`
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;

  ${(props) =>
    props.isVisible &&
    css`
      opacity: 1;
    `};
`

export const MenuFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 0;

  & p {
    font-size: 1.25rem;
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
    width: 30%;
    justify-content: flex-end;
  }
`
