import styled from 'styled-components';
import { colors } from '../../source/data';

export const Container = styled.section`
  background: #fff;
  text-align: center;
  align-items: center;
  margin: 2rem 2rem;
  padding-bottom: 3rem;

  h1 {
    text-align: center;
    padding-top: 1rem;
    font-size: 3rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  .row {
    margin-top: 3rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .project-text {
    margin-left: 1rem;
    text-align: justify;
    font-size: 1.5rem;
    max-width: 40%;

    h3 {
      font-size: 2rem;
      margin-bottom: 1em;
    }

    p {
      margin-bottom: 1rem;
    }

    a {
      margin-left: 0;
      margin-right: 1em;
      margin-bottom: 0.7em;
    }
  }

  img {
    margin-left: 3rem !important;
    max-width: 90%;
    border: none;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  /* Responsive layouts */

  @media (max-width: 1800px) {
    h1 {
      font-size: 2.5rem !important;
    }

    h3 {
      font-size: 1.5rem !important;
    }

    p {
      font-size: 1rem !important;
    }
  }

  @media (max-width: 1200px) {
    h1 {
      font-size: 2.5rem !important;
    }

    h3 {
      font-size: 1.5rem !important;
    }

    p {
      font-size: 1rem !important;
    }
  }

  @media (max-width: 800px) {
    h1 {
      font-size: 2.2rem !important;
    }

    h3 {
      font-size: 1.5rem !important;
    }

    p {
      font-size: 1rem !important;
    }
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 2rem !important;
    }

    h3 {
      font-size: 1.3rem !important;
    }

    p {
      font-size: 1rem !important;
    }

    .row {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .project-text {
      max-width: 100%;
      margin: 1rem;
    }

    img {
      margin: 1rem !important;
    }
  }
`;

export const Link = styled.a`
  display: inline-block;
  background: linear-gradient(-45deg, ${colors.first}, ${colors.second});
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
  transition: transform 0.3s;

  &:hover {
    transform: translateX(5px);
  }

  /* Responsive layouts */

  @media (max-width: 1800px) {
    font-size: 1.5rem;
  }

  @media (max-width: 1200px) {
    font-size: 1.2rem;
  }

  @media (max-width: 800px) {
    font-size: 1rem;
  }

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;
