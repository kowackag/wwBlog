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
            <Route path='/*' element={<Home/>}/>
            <Route path='/wydarzenia/*' element={<Events/>}/>
            <Route path='/wydarzenia/:slugs' element={<Article/>}/>
            <Route path='/filmografia/*' element={<Filmography/>}/>
                {/* <Route 
                        path={`fotosy`}
                        element= {<Home/>}/> */}
            {/* </Route> */}
            {/* <Route path='/zdjecia'><NotFound/></Route> */}
            <Route path='/kontakt' element={<Contact/>}/>
            <Route path='/404.html' element={<NotFound/>}/>
            <Route element={<Navigate to="/404.html" />}/>
        </Routes>
    )
}

export default RoutesList;