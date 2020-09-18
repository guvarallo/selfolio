import React from 'react';
import Fade from 'react-reveal/Fade';

import { aboutData } from '../../source/data';
import { Container } from './styles';

const About: React.FC = () => {
  const { sectionTitle, img, p1, p2, p3 } = aboutData;

  return (
    <Container id="about">
      <Fade duration={1000} delay={300} distance="30px">
        <h1>{sectionTitle}</h1>
      </Fade>
      <section>
        <Fade duration={1000} delay={700} distance="30px">
          <div className="left">
            <img src={img.src} alt="profile" />
          </div>
        </Fade>
        <Fade duration={1000} delay={1100} distance="30px">
          <div className="right">
            <p>{p1}</p>
            <p>{p2}</p>
            <p>{p3}</p>
          </div>
        </Fade>
      </section>
    </Container>
  );
};

export default About;
