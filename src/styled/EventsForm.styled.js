import styled from 'styled-components';

const StyledEventsForm = styled.form`
   padding: 2rem;
   background-color: rgb(var(--color-beta));
   color: rgb(var(--color-font));

    & div {
        padding: 2rem;
    }

    & label {
        padding:0.5rem 1rem;
    }

    & input {
        padding:0.5rem;
        border: none;
        outline: none;
    }

    & button {
        margin: auto;
        padding: 1rem 3rem;
        font-weight: bold;
    }
`
export default StyledEventsForm;