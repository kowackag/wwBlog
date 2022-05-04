import React from 'react';
import PropTypes from 'prop-types';
import StyledContainer from '../styled/Container.styled';
import StyledEventsForm from '../styled/EventsForm.styled';

const EventsForm = ({data, onChange, onClick}) => {
    
    const {phrase, dateFrom, dateTo} = data;
       
    return(
        <StyledEventsForm>
            <div>
                <label htmlFor="phrase">Szukaj wydarzenia:
                <input id="phrase" name="phrase" value={phrase} onChange={onChange}/></label>
            </div>
            <StyledContainer flex={true}>
                <label htmlFor="dateFrom">Data od: 
                <input id="dateFrom" name="dateFrom" value={dateFrom} type="date" onChange={onChange}/></label>
                <label htmlFor="dateTo">do: 
                <input id="dateTo" name="dateTo" value={dateTo} type="date" onChange={onChange}/></label>
            </StyledContainer>
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
