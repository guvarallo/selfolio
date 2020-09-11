import React from 'react';

import Main from './components/Main/index';
import About from './components/About/index';
import GlobalStyles from './styles/global';

const App: React.FC = () => (
  <>
    <Main />
    <About />
    <GlobalStyles />
  </>
);

export default App;
