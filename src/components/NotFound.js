import React from 'react';
import {Link} from 'react-router-dom';
 
import StyledNotFound from '../styled/NotFound.styled';

const NotFound = () => {
    return (
        <StyledNotFound>
            <p>Podana Strona nie istnieje! Wróć do <Link to="/">strony głównej</Link></p>
        </StyledNotFound>
    )
}

export default NotFound;
