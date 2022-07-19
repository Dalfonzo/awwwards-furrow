/* eslint-disable react/display-name */
import React from 'react'
import * as S from './CloseIcon.styles'

export interface CloseIconI extends React.HTMLAttributes<HTMLDivElement> {
  noLabel?: boolean
  [name: string]: unknown
}

const CloseIcon = React.forwardRef<HTMLDivElement, CloseIconI>(({ noLabel, ...rest }, ref) => (
  <S.CloseIconWrapper {...rest}>
    {!noLabel && <S.CloseTitle>Close</S.CloseTitle>}
    <S.Close ref={ref} />
  </S.CloseIconWrapper>
))

export default CloseIcon
