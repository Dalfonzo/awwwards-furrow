import styled, { css } from 'styled-components'

interface CursorI {
  isHovered: boolean
  isHoveredWithAccent: boolean
  isHoveredWithInvertedAccent: boolean
  isLocked: boolean
  isLockedWithAccent: boolean
  isLockedWithInvertedAccent: boolean
  isNormal: boolean
  isNormalWithAccent: boolean
  isNormalWithInvertedAccent: boolean
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
    props.isNormal &&
    css`
      height: 2.2rem;
      width: 2.2rem;
      background: ${(props) => props.theme.colors.text};
    `};

  ${(props) =>
    props.isNormalWithAccent &&
    css`
      height: 2.2rem;
      width: 2.2rem;
      background: ${(props) => props.theme.colors.accent};
    `};

  ${(props) =>
    props.isNormalWithInvertedAccent &&
    css`
      height: 2.2rem;
      width: 2.2rem;
      background: ${(props) => props.theme.colors.primary};
    `}

  ${(props) =>
    (props.isHovered || props.isLocked) &&
    css`
      height: 4rem;
      width: 4rem;
      border: 5px solid ${(props) => props.theme.colors.text};
    `};

  ${(props) =>
    (props.isHoveredWithAccent || props.isLockedWithAccent) &&
    css`
      height: 4rem;
      width: 4rem;
      border: 5px solid ${(props) => props.theme.colors.accent};
    `};

  ${(props) =>
    (props.isHoveredWithInvertedAccent || props.isLockedWithInvertedAccent) &&
    css`
      height: 4rem;
      width: 4rem;
      border: 5px solid ${(props) => props.theme.colors.primary};
    `}
`
