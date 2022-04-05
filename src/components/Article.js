import React from 'react';
import { useParams} from 'react-router-dom';
import { useAllPrismicDocumentsByType } from '@prismicio/react';

import StyledArticle from '../styled/Article.styled';
import StyledButton from '../styled/Button.styled';

const Article = () => {
    const [document] = useAllPrismicDocumentsByType('wojtekw');
    const {slugs} = useParams();
    if (document) {
        const [doc] = document.filter(item => item.uid === slugs);
        if (doc) {
            const {content, photo, introduction, title, date} = doc.data;
            return(
                <StyledArticle>
                    <header>
                        <h2>{title[0].text}</h2>
                        <p>{date}</p>
                    </header>
                    <StyledButton>Wróć</StyledButton>
                    {introduction.map((item, ind)=><p key={ind}>{item.text}</p>)}
                    {content.map((item, ind)=><p key={ind}>{item.text}</p>)}
                    <figure>
                        <img alt={photo.alt} src={photo.url}/>
                    </figure>
                    
                </StyledArticle>
            )
        }
        return null;
    }
    return null;
}


export default Article;