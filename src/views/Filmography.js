import React from 'react';
import {Route, Link} from 'react-router-dom';

import db from './../db/db.json';
import Film from './../components/Film';
import StyledFilmography from './../styled/Filmography.styled';
import Pagination from '../components/Pagination';

const Filmography = () => {

   return ( 
        <StyledFilmography> 
            <h2>Filmografia</h2>
            <Link to="/filmografia/news">link</Link>
            <Route path="/filmografia/news">
            <ul>
                <Pagination path="/filmografia/news" limit={5}>
                    {db.map(item =><Film key={item.id} item={item}/>)}
                </Pagination> 
            </ul>


            </Route>
            
        </StyledFilmography>
    ) 
}

export default Filmography;

