import React from 'react';
import {NavLink} from 'react-router-dom';
import StyledHeader from '../styled/Header.styled';
const Header = () => {
    const navFields = [
        { title: 'O mnie', path: '/'},
        { title: 'Wydarzenia', path: '/wydarzenia'},
        { title: 'Filmografia', path: '/filmografia'},
        { title: 'Zdjęcia', path: '/zdjecia'},
        { title: 'Kontakt', path: '/kontakt'},
    ]

    return(
        <StyledHeader>
            <h1 className="header__title">Wojciech Walkiewicz</h1>
            <p className="header__subtitle">Operator, scenarzysta, reżyser</p>
            <nav>
                <ul className="header__navigation">
                    {navFields.map(item=><li key={item.title}><NavLink to={item.path}>{item.title}</NavLink></li>)}
                </ul>
            </nav>
        </StyledHeader>
    )
}

export default Header;