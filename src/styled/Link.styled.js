import styled from 'styled-components'

const StyledLink = styled.nav`
    & ul {
        display:flex;
        justify-content: space-between;
        & li {
            list-style: none;
            text-align: center;
            & a {
                color: rgb(var(--color-font));
                text-decoration: none;
                padding: 0.4rem;
                border-bottom: 1px solid transparent;
                transition: 0.3s linear;

                &.active {
                    color: rgb(var(--color-contrast));
                    border-bottom: 1px solid rgb(var(--color-contrast));
                }
            }
        }
    }
`

export default StyledLink;