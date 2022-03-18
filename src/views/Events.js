import React from 'react';
import { useAllPrismicDocumentsByType } from '@prismicio/react';
import Article from '../components/Article'
const Events = () => {
    const [document] = useAllPrismicDocumentsByType('wojtekw');
    return(
        !document 
        ? <p>Loading...</p> 
        : document.map(({data,id})=><li key={id}><Article  {...data}/></li>)
    )
}

export default Events; 