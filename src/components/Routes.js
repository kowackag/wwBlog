import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Home from '../views/Home';
import Events from '../views/Events';
import Article from './Article';
import Filmography from '../views/Filmography';
import Contact from '../views/Contact';
import NotFound from './NotFound';

const RoutesList = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/wydarzenia/' element={<Events/>}/>
            <Route path='/wydarzenia/:slugs' element={<Article/>}/>
            <Route path='/filmografia' element={<Filmography/>}/>
            {/* <Route path='/zdjecia'><NotFound/></Route> */}
            <Route path='/kontakt' element={<Contact/>}/>
            <Route path='/404.html' element={<NotFound/>}/>
            {/* <Navigate to="/404.html" /> */}
        </Routes>
    )
}

export default RoutesList;