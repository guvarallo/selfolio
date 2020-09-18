import React from 'react';
import Fade from 'react-reveal/Fade';
import { Cta } from '../../styles/cta';

import { Container } from './styles';
import { contactData } from '../../source/data';

const Contact: React.FC = () => {
  return (
    <Container id="Contact">
      <Fade duration={1000} delay={300} distance="30px">
        <h1>{contactData.title}</h1>
      </Fade>
      <div>
        <Fade bottom duration={1000} delay={300} distance="30px">
          <p>{contactData.description}</p>
          <Cta href={contactData.mailTo}>E-mail</Cta>
        </Fade>
      </div>
    </Container>
  );
};

export default Contact;
