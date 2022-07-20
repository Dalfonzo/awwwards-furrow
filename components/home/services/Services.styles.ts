import { motion } from 'framer-motion'
import styled from 'styled-components'
import { Container as C, H2, InnerContainer as IC } from '~/shared/styles/common.styles'
import { responsiveProperty } from '~/shared/utils/responsiveProperties'

export const Container = styled(C)`
  ${responsiveProperty([{ minSize: '100px', maxSize: '200px', property: 'margin-top' }])};
  display: flex;

  @media (max-width: 1024px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    padding: 0;
  }
`

export const InnerContainer = styled(IC)``

export const Title = styled(H2)`
  margin-bottom: 45px;
`

export const RightSide = styled(motion.div)`
  @media (max-width: 1024px) {
    margin-top: 2rem;
  }
`

export const LeftSide = styled(motion.div)`
  width: 60%;
  max-width: 700px;
`

export const Description = styled.p`
  font-size: 18px;
  max-width: 480px;
`
