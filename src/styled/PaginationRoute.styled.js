import styled from 'styled-components';

const StyledPaginationRoute = styled.nav`
    margin: 3rem;

    & ul {
        display: flex;
        justify-content: center;
        list-style: none;
        & a {
            color: rgb(var(--color-alfa));
            padding: 1rem;
        }
    }
`

export default StyledPaginationRoute