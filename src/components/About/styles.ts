import styled from 'styled-components';
import { colors } from '../../source/data';

export const Container = styled.div`
  background: linear-gradient(-45deg, ${colors.third}, ${colors.fourth});
  color: #fff;

  h1 {
    text-align: center;
    padding-top: 2.5rem;
    font-size: 3rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  section {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 2rem 2rem;
    padding-bottom: 5rem;

    div {
      flex: 1;
      max-width: 40%;
      text-align: center;

      img {
        max-width: 50%;
        transition: 0.7s ease-in-out;
        filter: grayscale(100%);

        &:hover {
          transform: scale3d(1.12, 1.12, 1.12) rotateZ(-0.02turn);
          filter: grayscale(0%);
        }
      }

      p {
        font-size: 1.5rem;
        margin: 1em;
        text-align: justify;
        font-weight: 400;
      }
    }
  }

  /* Responsive layouts */

  @media (max-width: 1800px) {
    h1 {
      font-size: 2.5rem !important;
    }

    p {
      font-size: 1rem !important;
    }
  }

  @media (max-width: 1200px) {
    h1 {
      font-size: 2.5rem !important;
    }

    p {
      font-size: 1rem !important;
    }
  }

  @media (max-width: 800px) {
    h1 {
      font-size: 2.2rem !important;
    }

    p {
      font-size: 0.8rem !important;
    }
  }

  @media (max-width: 600px) {
    section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      div {
        max-width: 100%;

        img {
          max-width: 60%;
          margin-bottom: 1.5em;
        }
      }
    }

    h1 {
      font-size: 1.8rem !important;
    }

    p {
      font-size: 0.8rem !important;
      margin: 1rem;
    }
  }
`;
