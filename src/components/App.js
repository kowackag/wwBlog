import React from 'react';
import {HashRouter as Router, Nav, Switch, Route} from 'react-router-dom';
import { useSinglePrismicDocument } from '@prismicio/react';


function App() {
  const [post] = useSinglePrismicDocument('post');
  console.log(post);  
  return (
    <Router>
      {/* <Header> */}


      {/* </Header> */}
    </Router>
  );
}

export default App;
