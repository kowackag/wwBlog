import React from 'react';

const Article = props => {
    const {content, photo, introduction, title, date} = props;
    return (
        <>
            <h2>{title[0].text}</h2>
            <p>{date}</p>
            <p>{introduction[0].text}</p>
            <p>{content[0].text}</p>
            <img alt={photo.alt} src={photo.url}/>
        </>
    )
}

export default Article;