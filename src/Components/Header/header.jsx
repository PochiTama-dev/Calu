import React, { useState } from 'react';
import './header.css';
import miImagen from '../Header/logocalu.png';
import { Link } from 'react-router-dom';
import bars from '../../images/bars-solid.svg';

export const Header = () => {
  const [showLinks, setShowLinks] = useState(false);

  const handleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <header className='navBar'>
      <nav>
        <Link to={'/'}>
          <img className='logoCalu' src={miImagen} alt='Logo Calu' />
        </Link>
        <div className={showLinks ? 'link show ' : 'link'}>
          <Link to={'/blog'}> BLOG </Link>
          <Link to={'/products'}> Productos </Link>
        </div>
        <button className='burger' onClick={handleLinks}>
          <img src={bars} alt='logoBurger' />
        </button>
      </nav>
    </header>
  );
};
