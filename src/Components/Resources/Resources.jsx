import React from 'react';
import CardRes from './Card_resources/Card_res';
import { getDocs, collection, query, getDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase-config';
import './resources.css';
import { useState, useEffect } from 'react';
import Slider from '../Portfolio/Slider/Slider';
import { Link, useNavigate } from 'react-router-dom';
import elipse from './Card_resources/elipse.svg';
import cart_ from './Card_resources/cart.svg';
import { useCustomContext } from '../../Hooks/Context/Context';
const Resources = () => {
  const { cart, addToCart } = useCustomContext();
  const [cards, setCard] = useState([]);

  const getCard = async () => {
    const results = await getDocs(query(collection(db, 'e-commerce')));
    return results;
  };

  useEffect(() => {
    getCardData();
  }, []);

  const getCardData = async () => {
    const card = await getCard();
    setCard(card.docs.slice(-3));
  };

  ////////////////////////
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 1024;

  React.useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResizeWindow);
    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, []);

  const handleAddToCart = async (id) => {
    const querySnapshot = doc(db, 'e-commerce', id);
    const docSnapshot = await getDoc(querySnapshot);
    const productToAdd = docSnapshot.data();
    addToCart(productToAdd);
  };

  if (width > breakpoint) {
    return (
      <div className='res_ctn'>
        <div className='res_items'>
          <h1 className='res_title_adm'>RECURSOS PARA TU NEGOCIO</h1>

          <div className='res_card'>
            {cards &&
              cards.map((product, index) => (
                <CardRes
                  key={index}
                  description={product.data().thumbnail} // Pass the thumbnail URL as the description
                  title={<Link className="link_res" to={`/product/${product.id}`} onClick={() => {
                    window.scroll({
                      top: 0,
                    });
                  }}>{product.data().title}</Link>}
                  price={<p className='price'>${product.data().price}</p>}
                  button={
                    <div className='res_cart' onClick={() => handleAddToCart(product.id)}>
                      <img src={elipse} alt=' ' className='elipse' />
                      <img src={cart_} alt=' ' className='cart' />
                    </div>
                  }
                  more={
                    <Link className='btn_res_more' to={`/product/${product.id}`} onClick={() => {
                      window.scroll({
                        top: 0,
                      });
                    }} >
                      Ver Más
                    </Link>
                  }
                ></CardRes>
              ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='res_ctn'>
      <div className='res_items'>
        <h1 className='res_title_adm'>RECURSOS PARA TU NEGOCIO</h1>

        <Slider>
          {cards &&
            cards.map((product, index) => (
                  <CardRes
                  key={index}
                  description={product.data().thumbnail} // Pass the thumbnail URL as the description
                  title={<Link className='link_res' to={`/product/${product.id}`} onClick={() => {
                    window.scroll({
                      top: 0,
                    });
                  }}>{product.data().title}</Link> }
                  price={<p className='price'>${product.data().price}</p>}
                  button={
                    <div className='res_cart' onClick={() => handleAddToCart(product.id)}>
                      <img src={elipse} alt=' ' className='elipse' />
                      <img src={cart_} alt=' ' className='cart' />
                    </div>
                  }
                  more={
                    <Link className='btn_res_more' to={`/product/${product.id}`} onClick={() => {
                      window.scroll({
                        top: 0,
                      });
                    }}>
                      Ver Más
                    </Link>
                  }
                ></CardRes>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default Resources;
