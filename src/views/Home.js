import React from 'react';
import { useSinglePrismicDocument } from '@prismicio/react';

import ArcticaPicture from './../pinguins-1400x480.jpg'

import StyledHome from '../styled/Home.styled';

const Home = () => {
    const [homeDoc] = useSinglePrismicDocument('home');
   
    const getData = (doc) => {
        const {text: title} = doc.data.title[0];
        const {text: info} = doc.data.info[0];
        const {url, alt} = doc.data.photo;

        return [title, info, url, alt]
    }
    
    if (homeDoc) {
        const [title, info, url, alt] = getData(homeDoc);
        return(
            <StyledHome>
                <img src={ArcticaPicture} alt="arctica"/>
                <h2 className="title">{title}</h2>
                <img className="photo" src={url} alt={alt}/>
                <p>{info}</p>
            </StyledHome>
        )
    } 
    return null;
}

export default Home; 