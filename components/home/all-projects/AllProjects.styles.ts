import styled from 'styled-components'
import { MenuIcon } from '~/components/common/icons'
import { Container as C } from '~/shared/styles/common.styles'

export const Container = styled(C)`
  margin-top: 200px;
`

export const Menu = styled(MenuIcon)`
  position: relative;
  color: ${(props) => props.theme.colors.background};
  margin-left: 2rem;
`

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.accent};
  border: none;
  font-family: 'Presicav';
  color: ${(props) => props.theme.colors.background};
  display: flex;
  font-size: 20px;
  padding: 1.25rem;
  align-items: center;
  margin-left: auto;

  & > div:last-child {
    right: 0;
  }
`
