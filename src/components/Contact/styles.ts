import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(135deg, #1e1f26, #283655, #4d648d, #d0e1f9);
  color: #d0e1f9;

  h1 {
    text-align: center;
    padding-top: 2.5rem;
    font-size: 2rem;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 1em;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
      text-align: center;
      padding-bottom: 1em;
    }

    a {
      margin: 0;
      margin-bottom: 2em;
      border: 2px solid #d0e1f9;
      background: #d0e1f9;
      -webkit-background-clip: text;

      &::after {
        content: '';
        display: block;
        position: absolute;
        width: 0px;
        height: 100%;
        left: 0;
        bottom: 0;
        z-index: -1;
        transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.3s;
        background-image: linear-gradient(
          -45deg,
          #d0e1f9,
          #d0e1f9,
          #d0e1f9,
          #d0e1f9
        );
      }

      &:hover {
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: #283655;
      }
    }
  }
`;
