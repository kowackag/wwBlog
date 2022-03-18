import React from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Header'
import Home from '../views/Home';
import Events from '../views/Events'
function App() {
  
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path={'/home'}><Home/></Route>
        <Route exact path={'/wydarzenia'}><ul><Events/></ul></Route>
        <Route exact path={'/filmografia'} component={Home}></Route>
      </Switch>
    </Router>
  );
}

export default App;
