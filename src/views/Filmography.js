import React from 'react';
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
    const getFilms = () => {
        if (filmDoc) {
           return filmDoc.map(({data})=> {
                const filmList = {
                    id: uuid(),
                    title: data.title[0].text,
                    genre: data.genre[0].text,
                    year: (new Date(data.year)).getFullYear(),
                    performance: data.performance[0].text.split("")
                }
                return filmList;
            }) 
        }
    }
    const copyDB = getFilms() ? [...db, ...getFilms()] : db;
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
    const activeClass = 'active';
    const navigation = categories && categories.map(({id, slug, title}) =>(
        <li key={id}><NavLink className={({isActive})=> isActive ? activeClass : ""} to={`${slug}`}>{title}</NavLink></li>)) 

    const routes = categories && categories.map(({id, slug, title}) => {
        const filmDB = copyDB.filter(item=>item.performance.includes(`${title}`));
        return (
            <Route
                key={id}
                path={`${slug}/*`}
                element={
                    <Pagination path={`${slug}`} limit={8}>
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