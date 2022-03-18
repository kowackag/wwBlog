import {NavLink} from 'react-router-dom';
import styled from 'styled-components'

const StyledLink = styled(NavLink)`
    color: rgb(var(--color-font));
    text-decoration: none;
    padding: 0.4rem;
    border-bottom: 1px solid transparent;
    transition: 0.3s linear;

    &.${props=>props.activeClassName} {
        color: rgb(var(--color-contrast));
        border-bottom: 1px solid rgb(var(--color-contrast));
    }
`

export default StyledLink;