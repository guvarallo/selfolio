import styled from 'styled-components';

export const Container = styled.section`
  background: #fff;
  text-align: center;
  align-items: center;
  margin: 2rem 2rem;

  h1 {
    text-align: center;
    padding-top: 1rem;
    font-size: 2rem;
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
    margin-left: 3em;
    text-align: justify;
    font-size: 0.7em;
    max-width: 500px;

    h3 {
      margin-bottom: 1em;
    }

    a {
      margin-left: 0;
    }
  }

  img {
    margin-left: 3rem !important;
    max-height: 350px;
    border: none;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
`;

export const Link = styled.a`
  display: inline-block;
  margin-left: 1em !important;
  background: linear-gradient(-45deg, #1e1f26, #d0e1f9, #283655, #4d648d);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
  transition: transform 0.3s;

  &:hover {
    transform: translateX(5px);
  }
`;
