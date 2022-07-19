import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'
import { LogoIconI } from './LogoIcon'

export const Path = styled.path<{ accent?: boolean }>`
  fill: ${(props) => (props.accent ? props.theme.colors.accent : 'currentColor')};
`

export const Logo = styled(motion.div)<LogoIconI>`
  position: absolute;
  left: 2rem;

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
