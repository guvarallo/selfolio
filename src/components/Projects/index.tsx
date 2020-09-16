import React from 'react';
import Fade from 'react-reveal/Fade';

import { Container } from './styles';

import projectImg from '../../assets/project1.png';

const Project: React.FC = () => {
  return (
    <Container>
      <Fade duration={1000} delay={300} distance="30px">
        <h1>Projetos</h1>
      </Fade>
      <section className="row">
        <div className="project-text">
          <Fade duration={1000} delay={700} distance="30px">
            <h3>Projeto ABC</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse rhoncus lectus vitae pulvinar scelerisque. Donec sed
              gravida elit. Duis vel placerat sem, ac condimentum orci. Ut
              scelerisque magna sit amet ex condimentum varius.
            </p>
          </Fade>
        </div>
        <Fade duration={1000} delay={1100} distance="30px">
          <div className="project-img">
            <img src={projectImg} alt="project" />
          </div>
        </Fade>
      </section>
    </Container>
  );
};

export default Project;
