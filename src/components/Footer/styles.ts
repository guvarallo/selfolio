import styled from 'styled-components';
import { colors } from '../../source/data';

export const Container = styled.footer`
  background: ${colors.first};
  color: ${colors.third};
  height: 17rem;

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
    font-size: 1.8rem;

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
    font-size: 0.9rem;
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

  /* Responsive layouts */

  @media (max-width: 1800px) {
    height: 14rem;

    div {
      font-size: 1.5rem !important;
    }

    span {
      font-size: 0.9rem !important;
    }
  }

  @media (max-width: 1200px) {
    height: 12rem;

    div {
      font-size: 1.2rem !important;
    }

    span {
      font-size: 0.8rem !important;
    }
  }

  @media (max-width: 800px) {
    height: 11rem;

    div {
      font-size: 1rem !important;
    }

    span {
      font-size: 0.7rem !important;
    }
  }

  @media (max-width: 600px) {
    height: 9rem;

    div {
      font-size: 0.8rem !important;
    }

    span {
      font-size: 0.6rem !important;
    }
  }
`;
