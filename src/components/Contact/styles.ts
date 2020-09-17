import styled from 'styled-components';
import { colors } from '../../source/data';

export const Container = styled.div`
  background: linear-gradient(
    135deg,
    ${colors.first},
    ${colors.second},
    ${colors.third},
    ${colors.fourth}
  );
  color: #fff;

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
`;
