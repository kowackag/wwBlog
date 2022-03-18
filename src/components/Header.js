import React from 'react';
import StyledHeader from '../styled/Header.styled';
import StyledLink from './../styled/Link.styled'

const Header = () => {
    const navFields = [
        { title: 'O mnie', path: '/home'},
        { title: 'Wydarzenia', path: '/wydarzenia'},
        { title: 'Filmografia', path: '/filmografia'},
        { title: 'Zdjęcia', path: '/zdjecia'},
        { title: 'Kontakt', path: '/kontakt'},
    ]
    const activeClass = 'active';

    return(
        <StyledHeader>
            <div className="container">
                <div>
                    <h1 className="header__title">Wojciech Walkiewicz</h1>
                    <p className="header__subtitle">Operator, scenarzysta, reżyser</p>
                </div>
                <nav className="header__nav">
                    <ul className="nav__list">
                        {navFields.map(item=><li className="nav__item" key={item.title}><StyledLink activeClassName ={activeClass} to={item.path}>{item.title}</StyledLink></li>)}
                    </ul>
                </nav>
            </div>
        </StyledHeader>
    )
}

export default Header;