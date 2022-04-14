import React, {useState} from 'react';
import { NavLink, Routes, Route, Navigate} from 'react-router-dom';
import { useAllPrismicDocumentsByType } from '@prismicio/react';

import EventsForm from '../components/EventsForm';
import {getFilteredArr} from './../helpers';
import PaginationRoute from '../components/PaginationRoute';

import StyledEvents from '../styled/Events.styled';


const Events = () => {

    const [document] = useAllPrismicDocumentsByType('wojtekw');
    
    const initData = {
        phrase:'',
        dateFrom:'',
        dateTo:''
    }
    const [data, setData] = useState(initData);
    
    const changeValue = e => {
        e.preventDefault();
        const {name, value} = e.target;
        setData({...data, [name]: value});
    }

    if (document) {
        const filteredDoc = getFilteredArr(document, data);
        
        const navigation = filteredDoc && 
            filteredDoc.map(({data, uid, id})=>
                <li key={id}>
                    <NavLink to={`/wydarzenia/${uid}`}><h3>{data.title[0].text}</h3></NavLink>
                    <p>{data.date}</p>
                </li>);

        const routes = filteredDoc && filteredDoc.map(({id}) => {
            return (
                <Route
                    key={id}
                    path={`str/:page`}
                    element={
                        <PaginationRoute path={`wydarzenia/str`} limit={5}>
                          {navigation}
                        </PaginationRoute>
                    }
                />
            )
        })

        return (
            <StyledEvents data={data} onChange={changeValue} onClick={()=>setData(initData)}>
                <h2>Wydarzenia, galerie, wystawy</h2>
                <div>
                    <section>
                        <Routes>
                            {routes}
                            <Route path={''} element={<Navigate replace to={`str/1`}/>}/>
                        </Routes> 
                    </section>
                    <EventsForm data={document}/> 
                </div>  
            </StyledEvents>
        )
    }

    return null;
}

export default Events; 