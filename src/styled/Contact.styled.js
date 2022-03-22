import styled from 'styled-components';

const StyledContact = styled.article`
    max-width: 1400px;
    margin: auto;
    padding: 3rem 2rem;
    color: rgb(var(--color-alfa));
    font-size: 1.8rem;  

    & h2, h3 {
        margin-bottom: 2rem;
    }

    & li {
        max-width: 500px;
        margin-bottom: 1rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

`
export default StyledContact;