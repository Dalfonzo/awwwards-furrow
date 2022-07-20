import styled from 'styled-components'
import { Container as C, InnerContainer as IC } from '~/shared/styles/common.styles'
import { responsiveFontSize, responsiveProperty } from '~/shared/utils/responsiveProperties'

export const Container = styled(C)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.colors.accent};
  ${responsiveProperty([
    { minSize: '50px', maxSize: '200px', property: 'margin-top' },
    { minSize: '160px', maxSize: '290px', property: 'padding-bottom' },
  ])};

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

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const InnerContainer = styled(IC)``

export const Text = styled.p`
  ${responsiveFontSize('18px', '20px')};
  font-weight: 700;
  font-family: 'Presicav';

  @media (max-width: 768px) {
    margin: 0.2rem 0;
  }
`
