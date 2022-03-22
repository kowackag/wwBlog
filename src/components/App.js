import React from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';

import Header from './Header'
import Home from '../views/Home';
import Events from '../views/Events';
import Article from './Article';
import Contact from '../views/Contact';

function App() {
  return (
      <Router>
        <Header/>
        <Switch>
          <Route exact path={'/'}><Home/></Route>
          <Route exact path={'/wydarzenia'}><ul><Events/></ul></Route>
          <Route path='/wydarzenia/:slugs'><Article/></Route>
          <Route exact path={'/filmografia'} component={Home}></Route>
          <Route exact path={'/kontakt'}><Contact/></Route>
        </Switch>
      </Router>
  );
}

export default App;
