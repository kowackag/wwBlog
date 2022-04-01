import React from 'react';
import PropTypes from 'prop-types';

import StyledFilm from '../styled/Film.styled';

const Film = ({item}) => {
    const {id, title, genre, performance, year} = item;
    return (
        <StyledFilm key={id}>
            <h3>{title}</h3>
            <p>{genre}</p>
            <p>{performance.join(", ")} </p>
            <p>{year}</p>
        </StyledFilm>
    )
}

Film.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    genre: PropTypes.string,
    performance: PropTypes.array,
    year: PropTypes.string,
}
export default Film;