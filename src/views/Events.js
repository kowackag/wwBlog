import React, {useState} from 'react';
import { NavLink} from 'react-router-dom';
import { useAllPrismicDocumentsByType } from '@prismicio/react';

import StyledEvents from '../styled/Events.styled';
import EventsForm from '../components/EventsForm';
import {convertStringDateToMilis} from './../helpers';

const Events = () => {
    const [document] = useAllPrismicDocumentsByType('wojtekw');
    
    const initData = {
        phrase:'',
        dateFrom:'',
        dateTo:''
    }
    const [data, setData] = useState(initData);
    const {phrase, dateFrom, dateTo} = data;

    const changeValue = e => {
        e.preventDefault();
        const {name, value} = e.target;
        setData({...data, [name]: value});
    }

    if (document) {
        const filteredDoc = document.filter(({data}) => 
            data.title[0].text.toUpperCase().includes(phrase.toUpperCase())
            && (dateTo ? convertStringDateToMilis(data.date) <= convertStringDateToMilis(dateTo) : true)
            && (dateFrom ? convertStringDateToMilis(data.date) >= convertStringDateToMilis(dateFrom) : true));
        
        const navigation = (
            <ul>{filteredDoc.map(({data, uid, id})=>
                <li key={id}>
                    <NavLink to={`/wydarzenia/${uid}`}><h3>{data.title[0].text}</h3></NavLink>
                    <p>{data.date}</p>
                </li>)}
            </ul>);
            
        return (
            <StyledEvents data={data} onChange={changeValue} onClick={()=>setData(initData)}>
                <h2>Wydarzenia, galerie, wystawy</h2>
                <div>
                    {navigation}
                    <EventsForm data={document}/>
                </div>
            </StyledEvents>
        )
    }

    return null;
}

export default Events; 