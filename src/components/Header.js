import React from 'react';
import StyledHeader from '../styled/Header.styled';
import StyledContainer from '../styled/Container.styled';
import StyledLink from './../styled/Link.styled'

const Header = () => {
    const navFields = [
        { title: 'O mnie', path: '/'},
        { title: 'Wydarzenia', path: '/wydarzenia'},
        { title: 'Filmografia', path: '/filmografia'},
        { title: 'Zdjęcia', path: '/zdjecia'},
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
                <nav className="header__nav">
                    <ul className="nav__list">
                        {navFields.map(item=><li className="nav__item" key={item.title}><StyledLink activeClassName ={activeClass} exact to={item.path}>{item.title}</StyledLink></li>)}
                    </ul>
                </nav>
            </StyledContainer>
        </StyledHeader>
    )
}

export default Header;