import React from 'react';
import Fade from 'react-reveal/Fade';

import { Container } from './styles';

const Project: React.FC = () => {
  return (
    <Container>
      <Fade duration={1000} delay={300} distance="30px">
        <h1>Projetos</h1>
      </Fade>
    </Container>
  );
};

export default Project;
