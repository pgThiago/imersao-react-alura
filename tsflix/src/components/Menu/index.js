import React from 'react';

import logo from '../../assets/logo.png';
import './Menu.css'
import Button from '../Button';
import { Link } from 'react-router-dom';

const Menu = () => {
    
    return (
        <nav className="Menu">
            <Link to="/">
                <img clLinkssName="Logo" src={logo} alt="Logo do TSFLIX"/>
            </Link>
            <Button as={Link} className="ButtonLink" to="/cadastro/video" >
                Novo vídeo
            </Button>
        </nav>       
    );

};

export default Menu;