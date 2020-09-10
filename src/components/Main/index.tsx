import React from 'react';
import Fade from 'react-reveal/Fade';
// import { Link } from 'react-scroll';

import { mainData } from '../../source/data';
import { Outdoor } from './styles';
import { Cta } from '../../styles/cta';

const Main: React.FC = () => {
  const { title, name, subtitle, cta } = mainData;

  return (
    <Outdoor>
      <Fade left duration={1000} delay={500} distance="30px">
        <h1>
          {title}
          <span>{name}</span>
        </h1>
        <div className="text-typing">{subtitle}</div>
      </Fade>
      <Fade duration={1000} delay={1000} distance="30px">
        <Cta href="test">{cta}</Cta>
      </Fade>
    </Outdoor>
  );
};

export default Main;
