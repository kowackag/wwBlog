import React, {useEffect} from 'react';
import {Route, Routes, NavLink} from 'react-router-dom';
import {useAllPrismicDocumentsByType} from '@prismicio/react';
import {v4 as uuid} from 'uuid';

import db from './../db/db.json';
import Film from './../components/Film';
import Pagination from '../components/Pagination';

import StyledFilmography from './../styled/Filmography.styled';
import StyledNavFilms from '../styled/NavFilms.styled';

const Filmography = () => {
    const [filmDoc] = useAllPrismicDocumentsByType('filmography');
    useEffect(()=>{
        const currentState = window.history;
        if (!currentState.key || currentState.key !== 'film') {
            const newState =  { key: 'film' }
            window.history.replaceState(newState, null, '/filmografia/');
            // window.history.replaceState(newState, null, window.location.href);
        }
    },[]);

    console.log(window.history);

    const getFilms = () => {
        if (filmDoc) {
            return filmDoc.map(({data})=> {
                const {
                    title:[{text: title}],
                    genre:[{text: genre}],
                    year,
                    performance: [{text: performance}]
                } = data;
                const filmList = {
                    id: uuid(),
                    title: title,
                    genre: genre,
                    year: (new Date(year)).getFullYear(),
                    performance: performance.split(",")
                }
                console.log(filmList)
                return filmList;
            }) 
        }
    }
    const films = getFilms();

    const copyDB = films ? [...db, ...films] : db;

    const [categoryDoc] = useAllPrismicDocumentsByType('category');
    
    const createCategories = () => {
        if (categoryDoc) {
           return categoryDoc.map(({data, slugs, id})=>{
                const categories = {
                    id: id,
                    title: data.title[0].text,
                    slug: slugs[0],
                }
               
                return categories;
            })
        }
    }

    const categories = createCategories();
    const navigation = categories && categories.map(({id, slug, title}) =>(
        <li key={id}><NavLink className={({isActive})=> isActive ? 'active' : ''} to={`${slug}`}>{title}</NavLink></li>)) 

    const routes = categories && categories.map(({id, slug, title}) => {
        
        const filmDB = copyDB.filter(item=>item.performance.includes(`${title}`));
        return (
            <Route
                key={id}
                path={`${slug}/*`}
                element={
                    <Pagination path={`filmografia/${slug}`} limit={8}>
                        {filmDB.map((item, index) =><Film key={index} item={item}/>)}
                    </Pagination>
                }
            />
        )
    })

    return ( 
        <StyledFilmography> 
            <h2>Filmografia</h2>
            <StyledNavFilms><ul>{navigation}</ul></StyledNavFilms>
            <Routes>{routes}</Routes>
        </StyledFilmography>
    ) 
}

export default Filmography;