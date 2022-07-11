import styled from 'styled-components'
import { H3 } from '~/shared/styles/common.styles'

export const Heading = styled(H3)`
  font-family: 'Presicav';
  margin-bottom: 1rem;
`

export const List = styled.ul`
  list-style: none;
  font-size: 14px;
  color: ${(props) => props.theme.colors.accent};
`

export const Title = styled.h4`
  font-family: 'Presicav';
  background: ${(props) => props.theme.colors.background};
  padding: 0.5rem 0.5rem 0.5rem 2.2rem;
  z-index: 1;
  position: relative;

  &:before,
  &:after {
    content: '';
    background: ${(props) => props.theme.colors.accent};
    width: 15px;
    height: 4px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  &:before {
    left: 6px;
    transform: translateY(-50%) rotate(45deg);
  }

  &:after {
    left: 15px;
    transform: translateY(-50%) rotate(-45deg);
  }

  &:hover {
    color: ${(props) => props.theme.colors.text};
  }

  &.open:hover {
    color: ${(props) => props.theme.colors.accent};
  }

  &.open,
  &:hover {
    &:before {
      transform: translateY(-50%) rotate(0deg);
    }

    &:after {
      transform: translateY(-50%) rotate(0deg);
    }
  }
`

export const Content = styled.div`
  --items: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 1rem 1rem 1rem;
  transition: height 0.5s ease;
  padding-left: 1.2rem;

  &.open[data-items='5'] {
    --items: 5;
  }

  &.open[data-items='7'] {
    --items: 7;
  }

  &.open[data-items='10'] {
    --items: 10;
  }

  &.open {
    height: calc((18px * var(--items)));
    overflow: unset;
  }

  &.closed {
    height: 0;
    overflow: hidden;
  }
`

export const Item = styled.li`
  overflow: hidden;
`
