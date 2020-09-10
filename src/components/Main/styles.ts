import styled from 'styled-components';

export const Outdoor = styled.section`
  min-height: 100vh;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: #fff;
  font-weight: bold;
  color: black;
  margin-left: 65px;
  z-index: -1;

  h1 {
    white-space: nowrap;
    max-width: fit-content;
    font-weight: bold;
  }

  span {
    background: linear-gradient(135deg, #1488cc 0%, #2b32b2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .text-typing {
    overflow: hidden;
    font-size: 1.3em;
    white-space: nowrap;
    max-width: fit-content;
    border-right: 0.5em solid black;
    animation: typing 2.5s steps(40, end), blink 1s step-end infinite !important;
  }

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  @keyframes blink {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: black;
    }
  }
  /* @media (max-width: 75em) {
    font-size: 1rem;
  }
  
  @media (max-width: 56.25em) {
    font-size: 3.6rem;
    text-align: center;
  }

  @media (max-width: 37.5em) {
    font-size: 10%;
  }

  @media (max-width: 20em) {
    font-size: 1rem;
  } */
`;
