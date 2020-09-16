import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import { Container } from './styles';
// import { FooterData } from '../../source/data';

const Footer: React.FC = () => {
  return (
    <Container id="Footer">
      <div>
        <FontAwesomeIcon icon={faGithub} color="#283655" size="2x" />
        <FontAwesomeIcon icon={faLinkedinIn} color="#283655" size="2x" />
      </div>
      <hr />
      <span className="copyright">
        © {new Date().getFullYear()} - Template desenvolvido por
        <a
          href="http://www.varallo.me/"
          rel="noopener noreferrer"
          target="_blank"
        >
          {' '}
          Gus Varallo
        </a>
      </span>
    </Container>
  );
};

export default Footer;
