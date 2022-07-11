import styled from 'styled-components'
import { Container as C, H2, InnerContainer as IC } from '~/shared/styles/common.styles'

export const Container = styled(C)`
  margin-top: 200px;
  display: flex;
`

export const InnerContainer = styled(IC)``

export const Title = styled(H2)`
  margin-bottom: 45px;
`

export const RightSide = styled.div``

export const LeftSide = styled.div`
  width: 60%;
  max-width: 700px;
`

export const Description = styled.p`
  font-size: 18px;
  max-width: 480px;
`
