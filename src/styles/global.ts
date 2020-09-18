import { createGlobalStyle } from 'styled-components';
import { colors } from '../source/data';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    /* font-size: 62.5%;
    color: ${colors.first}; */
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
