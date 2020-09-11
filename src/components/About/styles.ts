import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(135deg, #1488cc 0%, #2b32b2 100%);
  color: white;

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

    div {
      flex: 1;
      margin-bottom: 4em;
      text-align: center;

      img {
        transition: 0.7s ease-in-out;
        filter: grayscale(100%);

        &:hover {
          transform: scale3d(1.12, 1.12, 1.12) rotateZ(-0.02turn);
          filter: grayscale(0%);
        }
      }

      p {
        font-size: 0.8em;
        margin: 1em 0;
      }
    }
  }
`;
