import { motion } from 'framer-motion'
import styled from 'styled-components'
import { Container as c } from '~/shared/styles/common.styles'

export const Header = styled(motion.header)``

export const Container = styled(c)`
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 2;
`
