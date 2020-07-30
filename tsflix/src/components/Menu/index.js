import React from 'react';

import logo from '../../assets/logo.png';
import './Menu.css'
import ButtonLink from './components/ButtonLink';
import Button from '../Button';
const Menu = () => {
    
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={logo} alt="Logo do TSFLIX"/>
            </a>
            <ButtonLink as="a" href="/" className="ButtonLink" >
                Novo vídeo
            </ButtonLink>
        </nav>       
    );

};

export default Menu;