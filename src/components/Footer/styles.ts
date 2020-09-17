import styled from 'styled-components';
import { colors } from '../../source/data';

export const Container = styled.footer`
  background: ${colors.first};
  color: ${colors.second};
  height: 12em;

  a {
    color: ${colors.second};
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
      color: ${colors.second};
    }

    svg:hover {
      color: #fff;
    }
  }

  hr {
    border: 0;
    width: 50%;
    margin: auto;
    border-top: 2px solid ${colors.second};
  }

  span {
    display: block;
    margin-top: 1em;
    font-size: 13px;
    text-align: center;
    color: ${colors.second};

    a {
      cursor: pointer;
      transition: 0.5s;
      color: ${colors.second};

      &:hover {
        color: #fff;
      }
    }
  }
`;
