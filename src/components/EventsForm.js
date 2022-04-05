import React from 'react';
import PropTypes from 'prop-types';

import StyledEventsForm from '../styled/EventsForm.styled';

const EventsForm = ({data, onChange, onClick}) => {
    
    const {phrase, dateFrom, dateTo} = data;
       
    return(
        <StyledEventsForm>
            <div>
                <label htmlFor="phrase">Szukaj wydarzenia:</label>
                <input id="phrase" name="phrase" value={phrase} onChange={onChange}/>
            </div>
            <div>
                <label htmlFor="dateFrom">Data od</label>
                <input id="dateFrom" name="dateFrom" value={dateFrom} type="date" onChange={onChange}/>
                <label htmlFor="dateTo">do</label>
                <input id="dateTo" name="dateTo" value={dateTo} type="date" onChange={onChange}/>
            </div>
            <div> 
                <button onClick={onClick}>Wyczyść</button>
            </div>
        </StyledEventsForm>
    )
}

EventsForm.propTypes = {
    phrase: PropTypes.string,
    dateFrom: PropTypes.number,
    dateTo: PropTypes.string
}
export default EventsForm;
