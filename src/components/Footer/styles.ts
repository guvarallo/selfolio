import styled from 'styled-components';

export const Container = styled.footer`
  background: #1e1f26;
  color: #283655;
  height: 12em;

  a {
    color: #283655;
    transition: 0.5s;

    &:hover {
      color: #fff;
    }
  }

  svg {
    display: block;
    margin: auto;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin: 0.7em;
      margin-top: 1em;
      transition: 0.5s;
      cursor: pointer;
      color: #283655;
    }

    svg:hover {
      color: #fff;
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
    font-size: 13px;
    text-align: center;
    color: #283655;

    a {
      cursor: pointer;
      transition: 0.5s;
      color: #283655;

      &:hover {
        color: #fff;
      }
    }
  }
`;
