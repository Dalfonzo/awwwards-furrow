import styled from 'styled-components'
import { Container as C, InnerContainer as IC } from '~/shared/styles/common.styles'

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

  & div:last-child {
    display: flex;
    align-items: center;
    justify-content: center;

    & > * {
      margin: 0.7rem;
      fill: ${(props) => props.theme.colors.accent};

      &:hover {
        fill: ${(props) => props.theme.colors.text};
      }
    }
  }
`

export const InnerContainer = styled(IC)``

export const Text = styled.p`
  font-size: 1.125rem;
  font-weight: 700;
  font-family: 'Presicav';
`
