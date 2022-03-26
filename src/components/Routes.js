import React from 'react';
import { Route, Switch,Redirect } from 'react-router-dom';

import Home from '../views/Home';
import Events from '../views/Events';
import Article from './Article';
import Filmography from '../views/Filmography';
import Contact from '../views/Contact';
import NotFound from './NotFound';

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/'><Home/></Route>
            <Route exact path='/wydarzenia/'><ul><Events/></ul></Route>
            <Route path='/wydarzenia/:slugs'><Article/></Route>
            <Route path='/filmografia'><Filmography/></Route>
            <Route path='/zdjecia'><NotFound/></Route>
            <Route path='/kontakt'><Contact/></Route>
            <Route path='/404.html'><NotFound/></Route>
            <Route><Redirect to="/404.html" /></Route>
        </Switch>
    )
}

export default Routes;