import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    font-family: 'Montserrat', sans-serif;
    font-size: 24px;
    color: #1e1f26;
  }

  body {
    background: #FFF;
    -webkit-font-smoothing: antialiased;
  }

  #root {
    margin: 0 auto;
  }

  a,
  a:link,
  a:hover,
  a:visited,
  a:active {
    text-decoration: none;
  }
`;
