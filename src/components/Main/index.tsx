import React, { useCallback } from 'react';
import Fade from 'react-reveal/Fade';
import smoothscroll from 'smoothscroll-polyfill';

import { mainData } from '../../source/data';
import { Outdoor } from './styles';
import { Cta } from '../../styles/cta';

const Main: React.FC = () => {
  const { title, name, subtitle, cta } = mainData;

  // Needed for the native window.scroll smooth behavior to work on all browsers
  smoothscroll.polyfill();

  const scrollTo = useCallback((element) => {
    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: element.offsetTop,
    });
  }, []);

  return (
    <Outdoor id="main">
      <Fade left duration={1000} delay={500} distance="30px">
        <h1>
          {title}
          <span>{name}</span>
        </h1>
        <div className="text-typing">{subtitle}</div>
      </Fade>
      <Fade left duration={1000} delay={1500} distance="30px">
        <Cta onClick={() => scrollTo(document.getElementById('about'))}>
          {cta}
        </Cta>
      </Fade>
    </Outdoor>
  );
};

export default Main;
