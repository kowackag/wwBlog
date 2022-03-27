import styled from 'styled-components';

const StyledNavFilms = styled.ul`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 3rem;
    list-style: none;
    color: red;

    & li {
        box-shadow: 2px 2px 4px rgb(var(--color-beta));
    margin-bottom: 1rem;
        & a {
            display: inline-block;
           
            padding: 1rem  2rem;
            text-decoration: none;
            color: rgb(var(--color-alfa));
            font-weight: bold;
            text-transform: uppercase
        }
    }
`

export default StyledNavFilms;