import React from 'react';
import {Route, Navigate, Routes} from  'react-router-dom';
import PaginationRoute from './PaginationRoute';

const Pagination = props => {
    const {children, path, limit=10} = props;

    return (
        <Routes>
            <Route path={`${path}/:page`}>
                <PaginationRoute path={path} limit={limit}>
                    {children}
                </PaginationRoute>
            </Route>
            {/* <Route><Navigate to={`${path}/1`}/></Route> */}
        </Routes>
    )
}

export default Pagination;