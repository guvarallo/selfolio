import styled from 'styled-components';

export const Container = styled.footer`
  background: #1e1f26;
  height: 12em;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin: 0.7em;
      margin-top: 2em;
      text-align: center;
      transition: 0.5s;
      cursor: pointer;
    }

    svg:hover {
      color: #d0e1f9;
    }
  }

  hr {
    border: 0;
    width: 50%;
    margin: auto;
    border-top: 2px solid #283655;
  }

  span {
    display: block;
    margin-top: 1em;
    color: #283655;
    font-size: 13px;
    text-align: center;

    a {
      color: #283655;
      cursor: pointer;
      transition: 0.5s;

      &:hover {
        color: #d0e1f9;
      }
    }
  }
`;
