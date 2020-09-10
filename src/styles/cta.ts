import styled from 'styled-components';

export const Cta = styled.a`
  display: inline-block;
  position: relative;
  padding: 0.5rem;
  margin-top: 20px;
  font-weight: bold;
  line-height: 1;
  z-index: 1;
  transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.6s;
  border: 2px solid transparent;
  border-image: linear-gradient(135deg, #1488cc 0%, #2b32b2 100%);
  border-image-slice: 1;
  background: linear-gradient(135deg, #1488cc 0%, #2b32b2 100%);
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
    background-image: linear-gradient(135deg, #1488cc 0%, #2b32b2 100%);
  }

  &:hover {
    text-decoration: none;
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: white !important;

    &::after {
      width: 100%;
    }
  }
`;
