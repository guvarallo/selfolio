import React from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-parallax-tilt';

import { Container, Link } from './styles';
import { Cta } from '../../styles/cta';

import { projectData } from '../../source/data';

const Project: React.FC = () => {
  return (
    <Container>
      <Fade left duration={1000} delay={300} distance="30px">
        <h1>Projetos</h1>
      </Fade>
      {projectData.map((project) => (
        <>
          <section className="row">
            <div className="project-text">
              <Fade left duration={1000} delay={700} distance="30px">
                <h3>{project.title}</h3>
                <p>{project.description1}</p>
                <p>{project.description2}</p>
                <div>
                  <Cta href={project.liveUrl}>Veja Online</Cta>
                  <Link href={project.sourceUrl}>Código Fonte</Link>
                </div>
              </Fade>
            </div>
            <Fade right duration={1000} delay={1100} distance="30px">
              <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
                <a href={project.sourceUrl}>
                  <img src={project.img.src} alt="project" />
                </a>
              </Tilt>
            </Fade>
          </section>
        </>
      ))}
    </Container>
  );
};

export default Project;
