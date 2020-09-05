import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #FFF;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Poppins';
    text-align: center;

  }

  #root {
    margin: 0 auto;
  }

  h1 {
    font-weight: 700;
  }

  p,
  a {
    font-family: 'Poppins', sans-serif;
    font-size: 1.6rem;
  }

  a,
  a:link,
  a:hover,
  a:visited,
  a:active {
    text-decoration: none;
  }

  a:hover {
    transition: all 0.3s ease-in-out;
  }

  button {
    cursor: pointer;
  }
`;
