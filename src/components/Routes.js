import React from 'react';
import { Route, Switch,Redirect } from 'react-router-dom';

import Home from '../views/Home';
import Events from '../views/Events';
import Article from './Article';
import Contact from '../views/Contact';

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/'><Home/></Route>
            <Route exact path='/wydarzenia/'><ul><Events/></ul></Route>
            <Route path='/wydarzenia/:slugs'><Article/></Route>
            {/* <Route path='/filmografia'></Route>
            <Route path='/zdjecia'></Route> */}
            <Route path='/kontakt'><Contact/></Route>
            <Route><Redirect to="/404.html" /></Route>
        </Switch>
    )
}

export default Routes;