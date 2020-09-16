import styled from 'styled-components';

export const Container = styled.section`
  background: #fff;

  h1 {
    text-align: center;
    padding-top: 1rem;
    font-size: 2rem;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 3rem;
  }

  .row {
    display: flex;
    flex-direction: row;
  }

  .project-text {
    max-width: 30%;
    margin-left: 3em;
    text-align: justify;
    font-size: 0.7em;

    h3 {
      margin-bottom: 1em;
    }
  }

  img {
    width: 90%;
    margin: 0 2rem;
    border: none;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
`;
