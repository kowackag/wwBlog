import styled from 'styled-components';

const StyledFilm = styled.li`

    margin-bottom: 1rem;
    display: grid;
    grid-template-columns: 1fr 1.5fr 0.5fr;
    list-style: none;
        
    h3 {
        grid-column: 1 / span 3;
        padding: 0.7rem;
        background-color: rgba(var(--color-beta), .3);
    }

    & a {
        text-decoration: none;
        color: rgb(var(--color-font));
    
        &:hover {
            color: #3430D0;
        }
    }

    & p {
        padding: 0 0.7rem;
        font-size:1.6rem;
        color: rgb(var(--color-beta));
    }

`
export default StyledFilm;