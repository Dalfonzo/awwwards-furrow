import styled from 'styled-components'
import { CloseIconI } from './CloseIcon'

export const CloseTitle = styled.span`
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

export const CloseIconWrapper = styled.div<CloseIconI>`
  position: absolute;
  right: 2rem;
  color: ${(props) => props.theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover > span {
    opacity: 1;
  }
`

export const Close = styled.div`
  --height: 7px;

  @media (max-width: 768px) {
    --height: 5px;
  }

  position: relative;
  height: calc(var(--height) * 3);
  width: calc(var(--height) * 5);

  &:before,
  &:after {
    content: '';
    background: currentColor;
    height: var(--height);
    width: calc(var(--height) * 5);
    position: absolute;
    left: 0;
  }

  &:before,
  &:after {
    top: 50%;
    left: 50%;
  }

  &:before {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &:after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`
