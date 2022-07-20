import styled from 'styled-components'
import { Container as C, InnerContainer as IC } from '~/shared/styles/common.styles'
import { responsiveFontSize } from '~/shared/utils/responsiveProperties'

export const Container = styled(C)`
  margin-top: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.colors.accent};
  padding-bottom: 290px;

  & div:first-child > *:hover {
    color: ${(props) => props.theme.colors.text};
  }

  & div:last-child,
  & span {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & div:last-child {
    & span > svg {
      margin: 0.7rem;
      fill: ${(props) => props.theme.colors.accent};
    }

    & span:hover svg {
      fill: ${(props) => props.theme.colors.text};
    }
  }
`

export const InnerContainer = styled(IC)``

export const Text = styled.p`
  ${responsiveFontSize('18px', '20px')};
  font-weight: 700;
  font-family: 'Presicav';
`
