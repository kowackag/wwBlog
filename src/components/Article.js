import React from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import { useAllPrismicDocumentsByType } from '@prismicio/react';

import StyledArticle from '../styled/Article.styled';
import StyledButton from '../styled/Button.styled';

const Article = () => {
    const [document] = useAllPrismicDocumentsByType('wojtekw');
    const {slugs} = useParams();
    const navigate = useNavigate();

    if (document) {
        const [doc] = document.filter(item => item.uid === slugs);
        if (doc) {
            const {content, photo, photodesc, introduction, title, date} = doc.data;
            return(
                <StyledArticle>
                    <StyledButton onClick={()=> navigate('/wydarzenia')}>Wróć</StyledButton>
                    <header>
                        <h2>{title[0].text}</h2>
                        <p>{date}</p>
                    </header>
                    
                    {introduction.map((item, ind)=><p key={ind}>{item.text}</p>)}
                    {content.map((item, ind)=><p key={ind}>{item.text}</p>)}
                    <figure>
                        <img alt={photo.alt} src={photo.url}/>
                        <figcaption>{photodesc[0] ? photodesc[0].text : ''}</figcaption>
                    </figure>
                </StyledArticle>
            )
        }
        return null;
    }
    return null;
}


export default Article;