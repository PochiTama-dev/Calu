import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase-config';
import { collection, addDoc } from 'firebase/firestore';
import './Cart.css';
import ModalBuy from './ModalBuy';

function Cart({ close, cart, handleDelete }) {
  const [total, setTotal] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  useEffect(() => {
    const calculateTotal = () => {
      let newTotal = 0;
      if (cart && cart.length > 0) {
        newTotal = cart.reduce((accumulator, product) => {
          const productPrice = parseFloat(product.price);
          return isNaN(productPrice) ? accumulator : accumulator + productPrice;
        }, 0);
      }
      setTotal(newTotal);
    };

    calculateTotal();
  }, [cart]);

  const handlePay = () => {
    setIsModalOpen(true);
  };

  const saveEmailToFirebase = async (email) => {
    try {
      const emailsCollectionRef = collection(db, 'email'); // Change to the correct collection name
      await addDoc(emailsCollectionRef, {
        email,
        timestamp: new Date(),
      });
      console.log('Email saved to Firebase successfully');
    } catch (error) {
      console.error('Error saving email to Firebase:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (email.match(emailRegex)) {
      await saveEmailToFirebase(email); // Save the email to Firebase
      navigate('/payment');
    } else {
      alert('Invalid email format. Please enter a valid email.');
    }
  };

  return (
    <div>
      <div className='cartPage'>
        <div className='cartContainer'>
          <p className='closeCart' onClick={close}>
            X
          </p>
          <h2>Carrito de compras</h2>
          <div className='cartItems'>
            {cart &&
              cart.map((product, index) => (
                <div className='cartItem' key={index}>
                  <img src={product.thumbnail} alt={product.title} />
                  <p>
                    <span>{product.title}</span>
                    <span>${product.price}</span>
                  </p>
                  <div className='deleteItem'>
                    <button onClick={() => handleDelete(product.title)}>
                      <img src='' alt='Borrar' />
                    </button>
                  </div>
                </div>
              ))}
          </div>
          <p className='total'>
            <span>Total</span>
            <span>{!isNaN(total) ? (total ? `$${total}` : 'Gratis') : '$0'}</span>
          </p>
          <button onClick={handlePay}>Iniciar compra</button>
        </div>
        {isModalOpen && (
          <ModalBuy
            email={email}
            setEmail={setEmail}
            handleSubmit={handleSubmit}
            setIsModalOpen={setIsModalOpen}
          />
        )}
        <div class='modal-background'></div>
      </div>
    </div>
  );
}

export default Cart;
