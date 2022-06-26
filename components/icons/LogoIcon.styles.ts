import styled, { css } from 'styled-components'
import { LogoIconI } from './LogoIcon'

export const Path = styled.path<{ accent?: boolean }>`
  fill: ${(props) => (props.accent ? props.theme.colors.accent : 'currentColor')};
`

export const Logo = styled.div<LogoIconI>`
  position: absolute;
  left: 0;

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
`
