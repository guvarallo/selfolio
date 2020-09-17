import styled from 'styled-components';
import { colors } from '../../source/data';

export const Container = styled.footer`
  background: ${colors.first};
  color: ${colors.third};
  height: 10em;

  a {
    color: ${colors.third};
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
      color: ${colors.third};
    }

    svg:hover {
      color: #fff;
    }
  }

  hr {
    width: 50%;
    margin: auto;
    border-top: 0.1px solid transparent;
    border-image: linear-gradient(
      -45deg,
      ${colors.first},
      ${colors.second},
      ${colors.third},
      ${colors.fourth}
    );
    border-image-slice: 1;
  }

  span {
    display: block;
    margin-top: 1em;
    font-size: 0.5em;
    text-align: center;
    color: ${colors.third};

    a {
      cursor: pointer;
      transition: 0.5s;
      color: ${colors.third};

      &:hover {
        color: #fff;
      }
    }
  }
`;
