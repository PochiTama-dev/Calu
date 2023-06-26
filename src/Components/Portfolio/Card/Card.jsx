import React from 'react';

import './card.css';
const Card = ({ image, title, text, btn }) => {
  return (
    <div className='card'>
      <div className='image'>{image}</div>

      <div className='title'>{title}</div>

      <div className='text'>{text}</div>

      <div className='card_btn'>{btn}</div>
    </div>
  );
};

export default Card;
