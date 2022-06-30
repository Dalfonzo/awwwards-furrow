import styled, { css } from 'styled-components'

interface CursorI {
  hover: boolean
  normal: boolean
  accent: boolean
}

export const Cursor = styled.div<CursorI>`
  border-radius: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 99;
  top: 50%;
  left: 50%;
  pointer-events: none;

  ${(props) =>
    props.normal &&
    css`
      height: 2.2rem;
      width: 2.2rem;
      background: ${(props) => props.theme.colors.accent};
    `}

  ${(props) =>
    props.hover &&
    css`
      height: 4rem;
      width: 4rem;
      border: 5px solid ${(props) => props.theme.colors.accent};
    `}

  ${(props) =>
    props.accent &&
    css`
      height: 4rem;
      width: 4rem;
      border: 5px solid ${(props) => props.theme.colors.primary};
    `}
`
