import React from 'react';
import {Link, useParams} from 'react-router-dom';
import PropTypes from 'prop-types';

import StyledPaginationRoute from './../styled/PaginationRoute.styled'

const PaginationRoute = props => {
    const {children, path, limit = 1} = props;
    const {page} = useParams();
    const begin = limit * (page-1);
    const end = page * limit;
    const length = children.length;
    const pages = Math.ceil(length / limit);

    const links = (new Array(pages).fill(0)).map(
        (item, index) => <li key={index}>
            <Link to={`/filmografia/${path}/${index+1}`}>
                {index +1}
            </Link>
        </li>
    );

    return (
        <>
            <ul>{children.slice(begin, end)}</ul>
            <StyledPaginationRoute>
                <ul>{links}</ul>
            </StyledPaginationRoute> 
        </>
    );
}

PaginationRoute.propTypes = {
    children: PropTypes.node,
    path: PropTypes.string,
    limit: PropTypes.number
}

export default PaginationRoute;