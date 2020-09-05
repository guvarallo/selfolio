import React from 'react';
import Fade from 'react-reveal/Fade';
// import { Link } from 'react-scroll';

import { mainData } from '../../source/data';
import { Outdoor } from './styles';

const Main: React.FC = () => {
  const { title, name, subtitle, cta } = mainData;

  return (
    <Outdoor>
      <Fade left duration={1000} delay={500} distance="30px">
        <h1>
          {title}
          <span>{name}</span>
        </h1>
        <br />
        {subtitle}
      </Fade>
      <Fade duration={1000} delay={1000} distance="30px">
        <button type="button">{cta}</button>
      </Fade>
    </Outdoor>
    // <section id="hero" className="jumbotron">
    //   <Container>
    //     <Fade left duration={1000} delay={500} distance="30px">
    //       <h1 className="hero-title">
    //         {title} <span className="text-color-main">{name}</span>
    //         <br />
    //         {subtitle}
    //       </h1>
    //     </Fade>
    //     <Fade duration={1000} delay={1000} distance="30px">
    //       <p className="hero-cta">
    //         <button type="button" className="cta-btn cta-btn--hero">
    //           <Link to="about" smooth duration={1000}>
    //             {cta}
    //           </Link>
    //         </button>
    //       </p>
    //     </Fade>
    //   </Container>
    // </section>
  );
};

export default Main;
