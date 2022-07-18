import styled from 'styled-components'

export const Container = styled.div<{ accentColor: boolean | undefined }>`
  &,
  & span {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & span > svg {
    margin: 0.7rem;
    fill: ${(props) => (props.accentColor ? props.theme.colors.accent : props.theme.colors.primary)};
  }

  & span:hover svg {
    fill: ${(props) => props.theme.colors.text};
  }
`
