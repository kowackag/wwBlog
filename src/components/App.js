import React from 'react';
import {HashRouter as Router} from 'react-router-dom';

import Header from './Header';
import AnimatedSwitch from './AnimatedSwitch';

function App() {
  return (
      <Router>
        <Header/>
        <AnimatedSwitch/>
      </Router>
  );
}

export default App;