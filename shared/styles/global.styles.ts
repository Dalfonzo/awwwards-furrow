import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  @font-face {
    font-family: 'Calibre';
    font-weight:300;
    src: url('/assets/fonts/Calibre-Light.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Calibre';
    font-weight:400;
    src: url('/assets/fonts/Calibre-Regular.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Calibre';
    font-weight:600;
    src: url('/assets/fonts/Calibre-SemiBold.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Calibre';
    font-weight:800;
    src: url('/assets/fonts/Calibre-Bold.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Calibre';
    font-weight:900;
    src: url('/assets/fonts/Calibre-Black.ttf') format('truetype');
  }

  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    /* cursor: none; */
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 16px;
    font-family:'Calibre' ,-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  body {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    overscroll-behavior: none;
    overflow-x: hidden;
  }
`
