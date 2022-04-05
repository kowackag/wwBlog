import React from 'react';
import {Routes, Route, Navigate} from  'react-router-dom';
import PropTypes from 'prop-types';

import PaginationRoute from './PaginationRoute';

const Pagination = props => {
    const {children, path, limit=10} = props;
    return (
        <Routes>
            <Route 
                path={`:page`} 
                element={<PaginationRoute path={`${path}`} limit={limit} children={children}/>}/>
            <Route path={'/'} element={<Navigate replace to={`/${path}/1`}/>}/>
        </Routes>
    )
}

Pagination.propTypes = {
    path: PropTypes.string.isRequired,
    limit: PropTypes.number,
    children: PropTypes.node
}

export default Pagination;