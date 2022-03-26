import React from 'react';
import {Route, Link} from 'react-router-dom';
import {useAllPrismicDocumentsByType} from '@prismicio/react';

import db from './../db/db.json';
import Film from './../components/Film';
import StyledFilmography from './../styled/Filmography.styled';
import Pagination from '../components/Pagination';

import {v4 as uuid} from 'uuid';

const Filmography = () => {

    const [document] = useAllPrismicDocumentsByType('filmography');
    
    const getFilms = () => {
        if (document) {
           return document.map(({data})=> {
                const filmList = {
                    id: uuid(),
                    title: data.title[0].text,
                    genre: data.genre[0].text,
                    year: (new Date(data.year)).getFullYear(),
                    performance: [data.performance[0].text]
                }
                return filmList;
            }) 
        }
    }

    const copyDB = getFilms() ? [...db, ...getFilms()] : db;

    return ( 
        <StyledFilmography> 
            <h2>Filmografia</h2>
            <Link to="/filmografia/news">link</Link>
            <Route path="/filmografia/news">
            <ul>
                <Pagination path="/filmografia/news" limit={5}>
                    {copyDB.map(item =><Film key={item.id} item={item}/>)}
                </Pagination> 
            </ul>


            </Route>
            
        </StyledFilmography>
    ) 
}

export default Filmography;

