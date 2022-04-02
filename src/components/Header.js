import React from 'react';
import { NavLink } from 'react-router-dom';
import StyledHeader from '../styled/Header.styled';
import StyledContainer from '../styled/Container.styled';
import StyledNav from './../styled/Link.styled'

const Header = () => {
    const navFields = [
        { title: 'O mnie', path: '/'},
        { title: 'Wydarzenia', path: '/wydarzenia'},
        { title: 'Filmografia', path: '/filmografia'},
        // { title: 'Zdjęcia', path: '/zdjecia'},
        { title: 'Kontakt', path: '/kontakt'},
    ]
    const activeClass = 'active';

    return(
        <StyledHeader>
            <StyledContainer flex={true}>
                <div>
                    <h1>Wojciech Walkiewicz</h1>
                    <p>Operator, scenarzysta, reżyser</p>
                </div>
                <StyledNav>
                    <ul>
                        {navFields.map(item=>
                            <li key={item.title}>
                                <NavLink className={({ isActive }) => (isActive ? activeClass : "")} to={item.path}>
                                    {item.title}
                                </NavLink>
                            </li>)}
                    </ul>
                </StyledNav>
            </StyledContainer>
        </StyledHeader>
    )
}

export default Header;