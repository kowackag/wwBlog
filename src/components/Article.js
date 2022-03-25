import React from 'react';
import { useParams} from 'react-router-dom';
import { useAllPrismicDocumentsByType } from '@prismicio/react';

const Article = () => {
    const [document] = useAllPrismicDocumentsByType('wojtekw');
    const {slugs} = useParams();
    if (document) {
        const [doc] = document.filter(item => item.uid === slugs);
        if (doc) {
            const {content, photo, introduction, title, date} = doc.data;
            console.log(content)
            return(
                <>
                    <h2>{title[0].text}</h2>
                    <p>{date}</p>
                    {introduction.map(({text})=><p>{text}</p>)}
                    {content.map(({text})=><p>{text}</p>)}
                    <img alt={photo.alt} src={photo.url}/>
                </>
            )
        }
        return null;
    }
    return null;
}


export default Article;