import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  @font-face {
    font-family: 'Montserrat';
    font-weight:300;
    src: url('/assets/fonts/Montserrat-Light.ttf') format('ttf');
  }

  @font-face {
    font-family: 'Montserrat';
    font-weight:400;
    src: url('/assets/fonts/Montserrat-Regular.ttf') format('ttf');
  }

  @font-face {
    font-family: 'Montserrat';
    font-weight:600;
    src: url('/assets/fonts/Montserrat-SemiBold.ttf') format('ttf');
  }

  @font-face {
    font-family: 'Montserrat';
    font-weight:800;
    src: url('/assets/fonts/Montserrat-Light.ttf') format('ttf');
  }

  @font-face {
    font-family: 'Montserrat';
    font-weight:900;
    src: url('/assets/fonts/Montserrat-Black.ttf') format('ttf');
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
    font-family:'Montserrat',-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  body {
    background: #FFF;
    overscroll-behavior: none;
    overflow-x: hidden;
  }

`
