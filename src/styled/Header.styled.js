import styled from 'styled-components';

const StyledHeader = styled.header`
    background-color: rgb(var(--color-alfa));
    color: rgb(var(--color-font));

    & .header__nav {
        width:55%; 
    }

    & .nav__list {
        display:flex;
        justify-content: space-between;
    }

    & .nav__item {
        list-style: none;
        color: rgb(var(--color-font));
        text-align: center;
    } 
`

export default StyledHeader;