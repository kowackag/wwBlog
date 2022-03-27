import React from 'react';
import {Route, Redirect, Switch} from  'react-router-dom';
import PaginationRoute from './PaginationRoute';

const Pagination = props => {
    const {children, path, limit=10} = props;

    return (
        <Switch>
            <Route path={`${path}/:page`}>
                <PaginationRoute path={path} limit={limit}>
                    {children}
                </PaginationRoute>
            </Route>
            <Redirect to={`${path}/1`}/>
        </Switch>
    )
}

export default Pagination;