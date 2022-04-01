import React from 'react';
import {Route, Navigate, Routes} from  'react-router-dom';
import PropTypes from 'prop-types';

import PaginationRoute from './PaginationRoute';

const Pagination = props => {
    const {children, path, limit=10} = props;
    console.log(path);
    return (
        <Routes>
            <Route path={`${path}/:page`}>
                <PaginationRoute path={path} limit={limit}>
                    {children}
                </PaginationRoute>
            </Route>
            <Route element={<Navigate to={`${path}/1`}/>}/>
        </Routes>
    )
}

Pagination.propTypes = {
    path: PropTypes.string.isRequired,
    limit: PropTypes.number,
    children: PropTypes.node
}

export default Pagination;