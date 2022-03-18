import React from 'react';
import { useSinglePrismicDocument } from '@prismicio/react';

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
            <>
                <h2>{title}</h2>
                <p>{info}</p>
                <img src={url} alt={alt}/>
            </>
        )
    } 
    return null;
}

export default Home; 