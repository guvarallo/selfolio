import styled from 'styled-components';
import { colors } from '../../source/data';

export const Container = styled.div`
  background: linear-gradient(135deg, ${colors.first}, ${colors.second});
  color: #fff;

  h1 {
    text-align: center;
    padding-top: 2.5rem;
    font-size: 3rem;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    padding-bottom: 1rem;

    p {
      text-align: center;
      padding-bottom: 1em;
    }

    a {
      padding: 1.2rem;
      font-size: 1.8rem;
      margin: 0;
      margin-bottom: 2em;
      border: 2px solid #fff;
      background: #fff;
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
        background-image: linear-gradient(-45deg, #fff, #fff, #fff, #fff);
      }

      &:hover {
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: ${colors.second};
      }
    }
  }

  /* Responsive layouts */

  @media (max-width: 1800px) {
    h1 {
      font-size: 2.5rem !important;
    }

    div {
      font-size: 1rem !important;
    }

    a {
      font-size: 1.5rem !important;
      padding: 1rem !important;
    }
  }

  @media (max-width: 1200px) {
    h1 {
      font-size: 2.5rem !important;
    }

    div {
      font-size: 1rem !important;
    }

    a {
      font-size: 1.2rem !important;
      padding: 0.8rem !important;
    }
  }

  @media (max-width: 800px) {
    h1 {
      font-size: 2.2rem !important;
    }

    div {
      font-size: 1rem !important;
    }

    a {
      font-size: 1rem !important;
      padding: 0.7rem !important;
    }
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 2rem !important;
    }

    div {
      font-size: 1rem !important;
    }

    a {
      font-size: 0.8rem !important;
      padding: 0.6rem !important;
    }
  }
`;
