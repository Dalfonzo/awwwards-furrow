import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'
import { MenuIconI } from './MenuIcon'

const height = '7px'

export const MenuTitle = styled.span`
  font-family: 'Presicav';
  font-size: 20px;
  font-weight: bold;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 3.5rem;
  opacity: 0;
  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
`

export const MenuWrapper = styled(motion.div)<MenuIconI>`
  position: absolute;
  right: 2rem;
  color: ${(props) => props.theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover > span {
    opacity: 1;
  }

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

export const Menu = styled.div`
  position: relative;
  height: calc(${height} * 3);
  width: calc(${height} * 5);

  &:before,
  &:after {
    content: '';
    background: currentColor;
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
