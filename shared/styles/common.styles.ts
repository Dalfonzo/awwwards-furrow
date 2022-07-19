import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

export const Container = styled(motion.div)`
  max-width: ${(props) => props.theme.breakPoints.lg};
  margin: auto;
  padding: 0 32px;
`

interface InnerContainerI {
  spaceAsPadding?: boolean
  spaceAsMargin?: boolean
}

export const InnerContainer = styled(motion.div)<InnerContainerI>`
  ${(props) =>
    props.spaceAsPadding &&
    css`
      padding-left: 100px;
    `}

  ${(props) =>
    props.spaceAsMargin &&
    css`
      margin-left: 100px;
    `}
`

export const H2 = styled(motion.h2)`
  font-size: 2.625rem;
  font-weight: 500;
  line-height: 1;
`

export const H3 = styled(motion.h3)`
  font-size: 1.25rem;
  font-weight: bold;
`
