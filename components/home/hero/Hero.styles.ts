import { motion } from 'framer-motion'
import styled from 'styled-components'
import { responsiveFontSize, responsiveProperty } from '~/shared/utils/responsiveProperties'

export const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`

export const Container = styled.main`
  position: relative;
`

export const Video = styled.video`
  object-fit: cover;
`

export const H1 = styled(motion.h1)`
  position: absolute;
  left: -20px;
  pointer-events: none;
  font-weight: 900;
  line-height: 0.67;
  display: flex;
  flex-direction: column;
  z-index: 1;
  ${responsiveProperty([{ maxSize: '-146px', minSize: '-58px', property: 'bottom' }])};
  ${responsiveFontSize('160px', '420px')};

  & > span {
    position: relative;
  }
`
