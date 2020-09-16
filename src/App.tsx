import React from 'react';

import Main from './components/Main/index';
import About from './components/About/index';
import Project from './components/Projects/index';
import GlobalStyles from './styles/global';

const App: React.FC = () => (
  <>
    <Main />
    <About />
    <Project />
    <GlobalStyles />
  </>
);

export default App;
