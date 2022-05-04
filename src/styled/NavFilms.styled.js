import styled from 'styled-components';

const StyledNavFilms = styled.nav`
    & ul {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        margin: 1rem;
        list-style: none;   
    }
   
    & li {
        box-shadow: 2px 2px 4px rgb(var(--color-beta));
        margin-bottom: 1rem;
        position: relative;
        
        & a {
            display: inline-block;
            padding: 1rem  2rem;
            text-decoration: none;
            color: rgb(var(--color-alfa));
            font-weight: bold;
            text-transform: uppercase;
            text-align:center;
           
            &.active {
                background-color: rgba(var(--color-contrast),0.5);
                font-weight: bold;
            }
        }  
    }

   
`

export default StyledNavFilms;