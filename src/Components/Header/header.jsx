import React, { useState } from 'react';
import './header.css';
import miImagen from '../Header/logocalu.png';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [showLinks, setShowLinks] = useState(true);

  const handleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <header className='navBar'>
      <nav>
        <Link to={'/'}>
          <img className='logoCalu' src={miImagen} alt='Logo Calu' />
        </Link>
        <div className={showLinks ? 'links ' : 'link show '}>
          <Link to={'/blog'}> Blog </Link>
          <Link to={'/services'}> Servicios </Link>
        </div>
        <span
          onClick={handleLinks}
          className={`btn ${showLinks ? 'bar' : 'cross'}`}
        >
          <div>
            <i></i>
            <i></i>
            <i></i>
          </div>
        </span>
      </nav>
    </header>
  );
};
