import React from 'react';
import { Link, useLocation } from 'react-router-dom'; //import de link(lien navbar et uselocation qui est un hook)
import '../css/header.css';
import logo from "../images/logo-kasa.png";

//creation du composant header qui contient les composants logo et nav et utilisation du hook uselocation pour obtenir l objet location
const Header = () => {
  const location = useLocation(); 
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Kasa Logo" />
      </div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Accueil</Link>
          </li>
          <li>
            <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>A Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;