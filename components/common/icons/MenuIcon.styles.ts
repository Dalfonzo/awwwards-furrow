import styled, { css } from 'styled-components'
import { MenuIconI } from './MenuIcon'

const height = '7px'

export const Menu = styled.div<MenuIconI>`
  height: calc(${height} * 3);
  width: calc(${height} * 5);
  position: absolute;
  right: 0;

  ${(props) =>
    props.header &&
    css`
      top: 54px;
    `}

  ${(props) =>
    props.footer &&
    css`
      bottom: 54px;
    `}

  &:before,
  &:after {
    content: '';
    background: ${(props) => props.theme.colors.text};
    height: ${height};
    width: calc(${height} * 5);
    position: absolute;
    left: 0;
  }

  &:before {
    top: 0;
  }

  &:after {
    top: calc(${height} * 2);
  }
`
