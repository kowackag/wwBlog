import React from 'react';
import { useSinglePrismicDocument } from '@prismicio/react';
import ArcticaPicture from './../pinguins-1400x480.jpg'
import StyledHome from '../styled/Home.styled';

const Home = () => {
    const [homeDoc] = useSinglePrismicDocument('home');
   
    const getData = (doc) => {
        const title = doc.data.title[0].text;
        const info = doc.data.info[0].text;
        const url = doc.data.photo.url;
        const alt = doc.data.photo.alt;
        return [title, info, url,alt]
    }
    
    if (homeDoc) {
        const [title, info, url, alt] = getData(homeDoc);
        return(
            <StyledHome>
                <img  alt="arctica" src={ArcticaPicture}/>
                <h2 className="title">{title}</h2>
                <img src={url} className="photo" alt={alt}/>
                <p>{info}</p>
            </StyledHome>
        )
    } 
    return null;
}

export default Home; 