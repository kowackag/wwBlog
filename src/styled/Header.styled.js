import styled from 'styled-components';

console.log(styled)

const StyledHeader = styled.header`
    --color-font: ${props=>props.theme.colorFont};
    --color-alfa: ${props=>props.theme.colorBgcDark};
    --color-beta: ${props=>props.theme.colorBgcMed};
    --color-gamma: ${props=>props.theme.colorBgcLight};
    --color-contrast:${props=>props.theme.colorContrast};
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding:1rem 2rem;
    background-color: rgb(var(--color-alfa));
    color: rgb(var(--color-font));
    

    & .header__nav {
        width:60%; 
    }

    & .nav__list {
        display:flex;
        justify-content: space-between;
        list-style: none
    }

    & .nav__item {
        color: rgb(var(--color-font));
        text-align: center;
    }
  
`

export default StyledHeader;