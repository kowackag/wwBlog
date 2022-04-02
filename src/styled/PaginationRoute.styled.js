import styled from 'styled-components';

const StyledPaginationRoute = styled.nav`
    margin: 3rem;

    & ul {
        display: flex;
        justify-content: center;
        list-style: none;
        & a {
            padding: 1rem;
            color: rgb(var(--color-alfa));
            text-decoration: none;
            
            &.active {
                font-weight: bold;
                text-decoration: underline;
            }
        }
    }
`

export default StyledPaginationRoute