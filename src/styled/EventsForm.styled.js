import styled from 'styled-components';

const StyledEventsForm = styled.form`
    padding: 2rem 1rem;
    margin:2rem auto;
    background-color: rgb(var(--color-beta));
    color: rgb(var(--color-font));
    align-self: flex-start;
    min-width:70%;
    
    & > div {
        padding: 1rem;
        text-align: center;
    }

    & input {
        margin: 1rem;
        padding:1rem;
        border: none;
        outline: none;
    }

    & button {
        margin: auto;
        padding: 1rem 3rem;
        font-weight: bold;
    }

    @media (min-width:762px) {
        min-width:auto;
    }
`
export default StyledEventsForm;