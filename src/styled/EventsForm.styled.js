import styled from 'styled-components';

const StyledEventsForm = styled.form`
    padding: 2rem 1rem;
    background-color: rgb(var(--color-beta));
    color: rgb(var(--color-font));
    align-self: flex-start;
    & div {
        padding: 1rem;
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