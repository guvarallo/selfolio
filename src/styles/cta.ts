import styled from 'styled-components';
import { colors } from '../source/data';

export const Cta = styled.a`
  display: inline-block;
  position: relative;
  margin-top: 1em;
  padding: 1.2rem;
  font-size: 1.8rem;
  font-weight: bold;
  line-height: 1;
  z-index: 1;
  transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.6s;
  border: 1px solid transparent;
  border-image: linear-gradient(
    -45deg,
    ${colors.first},
    ${colors.second},
    ${colors.third},
    ${colors.fourth}
  );
  border-image-slice: 1;
  background: linear-gradient(
    -45deg,
    ${colors.first},
    ${colors.second},
    ${colors.third},
    ${colors.fourth}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

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
    background-image: linear-gradient(
      -45deg,
      ${colors.first},
      ${colors.second},
      ${colors.third},
      ${colors.fourth}
    );
  }

  &:hover {
    text-decoration: none;
    -webkit-background-clip: text;
    -webkit-text-fill-color: white;
    cursor: pointer;

    &::after {
      width: 100%;
    }
  }

  /* Responsive layouts */

  @media (max-width: 1800px) {
    font-size: 1.5rem;
    padding: 1rem;
  }

  @media (max-width: 1200px) {
    font-size: 1.2rem;
    padding: 0.8rem;
  }

  @media (max-width: 800px) {
    font-size: 1rem;
    padding: 0.8rem;
  }

  @media (max-width: 600px) {
    font-size: 0.8rem;
    padding: 0.6rem;
  }
`;
