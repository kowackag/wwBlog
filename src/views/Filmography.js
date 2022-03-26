import React from 'react';

import db from './../db/db.json';
import Film from './../components/Film';
import StyledFilmography from './../styled/Filmography.styled';

const Filmography = () => {

   return ( 
        <StyledFilmography>
            <h2>Filmografia</h2>
            <ul>
                {db.map(item =><Film key={item.id} item={item}/>)}
            </ul>
        </StyledFilmography>
    ) 
}

export default Filmography;

