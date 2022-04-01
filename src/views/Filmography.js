import React from 'react';
import {Route, Routes, Link} from 'react-router-dom';
import {useAllPrismicDocumentsByType} from '@prismicio/react';

import db from './../db/db.json';
import Film from './../components/Film';
import StyledFilmography from './../styled/Filmography.styled';
import Pagination from '../components/Pagination';
import StyledNavFilms from '../styled/NavFilms.styled';
import {v4 as uuid} from 'uuid';

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
   
    const navigation = categories && categories.map(({id, slug, title}) =>(
        <li key={id}><Link to={`/filmografia/${slug}`}>{title}</Link></li>)) 

    const routes = categories && categories.map(({id, slug, title}) => {
       
        const filmDB = copyDB.filter(item=>item.performance.includes(`${title}`));
        // console.log(filmDB)
        return (
            <Routes>
                <Route 
                    path={`/filmografia/${slug}`}
                    element={
                        <Pagination path={`/filmografia/${slug}`} limit={8}>
                            {filmDB.map(item =><Film key={item.id} item={item}/>)}
                        </Pagination>}
                />
            </Routes>
        )
    })

    return ( 
        <StyledFilmography> 
            <h2>Filmografia</h2>
            <StyledNavFilms>{navigation}</StyledNavFilms>
            {routes}
        </StyledFilmography>
    ) 
}

export default Filmography;

