import React from 'react';
import './contact.css';
import { Header } from '../Header/header';

const Contact = () => {
  return (
    <>
      <Header />
      <div className='contact'>
        <div className='contact-title'>
          <h2>Contactanos</h2>
          <p>Te damos el servicio que nos gustaría recibir </p>
        </div>
        <form action='post' className='contact-form'>
          <label htmlFor='nombre'>Nombre</label>
          <input className='contact-inputs' type='text' name='nombre' id='nombre' />

          <label htmlFor='email'>E-mail</label>
          <input className='contact-inputs' type='email' name='email' id='email' />

          <label htmlFor='tel'>Telefono (opcional)</label>
          <input className='contact-inputs' type='tel' name='tel' id='tel' />

          <label htmlFor='message'>Mensaje</label>
          <textarea name='message' id='message' cols='30' rows='10'></textarea>
        </form>
        <div className='buttonContainer'>
          <button className='contact-button' type='submit'>
            Enviar
          </button>
        </div>
      </div>
    </>
  );
};

export default Contact;
