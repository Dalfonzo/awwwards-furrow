import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'
import { responsiveFontSize, responsiveProperty } from '../utils/responsiveProperties'

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
      ${responsiveProperty([{ maxSize: '100px', minSize: '32px', property: 'padding-left' }])}
    `}

  ${(props) =>
    props.spaceAsMargin &&
    css`
      ${responsiveProperty([{ maxSize: '100px', minSize: '32px', property: 'margin-left' }])}
    `}
`

export const H2 = styled(motion.h2)`
  font-weight: 500;
  line-height: 1;
  ${responsiveFontSize('24px', '42px')};
`

export const H3 = styled(motion.h3)`
  ${responsiveFontSize('18px', '20px')};
  font-weight: bold;
`
