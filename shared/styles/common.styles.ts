import styled, { css } from 'styled-components'

export const Container = styled.div`
  max-width: ${(props) => props.theme.breakPoints.lg};
  margin: auto;
  padding: 0 32px;
`

interface InnerContainerI {
  spaceAsPadding?: boolean
  spaceAsMargin?: boolean
}

export const InnerContainer = styled.div<InnerContainerI>`
  ${(props) =>
    props.spaceAsPadding &&
    css`
      padding: 0 8.3%;
    `}

  ${(props) =>
    props.spaceAsMargin &&
    css`
      margin: 0 8.3%;
    `}
`
