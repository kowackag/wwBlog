import styled from 'styled-components';

const StyledHeader = styled.header`
    font-size: 1.5rem;
    background-color: rgb(var(--color-alfa));
    color: rgb(var(--color-font));

    @media (min-width: 762px) {
        font-size: 1.6rem;
        & nav {
            width:55%; 
        }
    }
`

export default StyledHeader;