import styled from 'styled-components';
import { lighten } from 'polished';

export const Outdoor = styled.section`
  button {
    width: 200px;
    height: 70px;
    border-radius: 0 5px 5px 0;
    border: 0;
    background: #000;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${lighten(0.4, '#000')};
    }
  }
`;
