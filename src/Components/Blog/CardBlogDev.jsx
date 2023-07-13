// CardBlogDev.js
import React from 'react';
import logo from '../../images/logocalu.png';

const CardBlogDev = ({ deletePost, handlePostClick }) => {
  return (
    <div className='card-blog'>
      <div className='blogImage'>
        <img src={logo} alt='' />
      </div>
      <div className='cardHeaderblog'>
        <div className='titleblog'>
          <h2>Lorem ipsum.</h2>
        </div>
        <div className='deleteblog'>
          <>
            <button
              onClick={() => {
                deletePost(1, null);
              }}
              className='deleteblogButton'
            >
              &#128465; Delete
            </button>
            <button
              onClick={() => {
                // Lógica para editar el post
              }}
              className='editblogButton'
            >
              &#9998; Edit
            </button>
          </>
        </div>
      </div>
      <div className='cardTextblogContainer'>
        <p>Lorem ipsum dolor sit amet. </p>
      </div>
      <button className='viewButton' onClick={() => handlePostClick(1)}>
        {'Leer Más >>'}
      </button>
    </div>
  );
};

export default CardBlogDev;
