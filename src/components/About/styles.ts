import styled from 'styled-components';
import { colors } from '../../source/data';

export const Container = styled.div`
  background: linear-gradient(-45deg, ${colors.third}, ${colors.fourth});
  color: #fff;

  h1 {
    text-align: center;
    padding-top: 2.5rem;
    font-size: 2rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  section {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 2rem 2rem;
    padding-bottom: 4rem;

    div {
      flex: 1;
      text-align: center;
      max-width: 550px;

      img {
        transition: 0.7s ease-in-out;
        filter: grayscale(80%);

        &:hover {
          transform: scale3d(1.12, 1.12, 1.12) rotateZ(-0.02turn);
          filter: grayscale(0%);
        }
      }

      p {
        font-size: 0.7em;
        margin: 1em 0;
        text-align: left;
        font-weight: 400;
      }
    }
  }
`;
