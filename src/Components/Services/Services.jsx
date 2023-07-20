import './services.css';
import React, { useEffect, useState } from 'react';
import { Header } from '../Header/header';
import Slider from '../Services/Card_srv/Slider/Slider';
import Card_srv_flip from './Card_srv/Card_srv_flip';
import Footer from '../Footer/Footer';
import CTN from '../CTN/CTN';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db, storage } from '../../firebase-config';
import { ref } from 'firebase/storage';

const Services = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 1024;
  React.useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResizeWindow);
    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, []);

  const [servicios, setServicios] = useState([]);
  const serviciosRef = collection(db, 'servicios');
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(serviciosRef);
      setServicios(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, []);

  const isAdmin = true;
  if (width > breakpoint) {
    return (
      <div className='scroll_ctn'>
        <Header />;
        <div className='services_container'>
          <div className='srv_title'>
            <h1>Nuestros Servicios</h1>
            {isAdmin && (
              <h1>
                <Link to={'/admin-crud'}>Admin</Link>
              </h1>
            )}
          </div>
          <div>
            {servicios.map((servicio, index) => {
              return (
                <section>
                  <div className='srv_cards' key={index}>
                    <div className='card_srv_cont'>
                      <div className='card_srv_info'>
                        <div className='title_srv'>{servicio.title}</div>
                        <div className='sub_d'>{servicio.sub}</div>
                        <div className='des_1d'>
                          <div>{servicio.des_1}</div>
                          <br />
                          <div>{servicio.des_2}</div>
                        </div>
                        <div className='des_3d'>{servicio.des_3}</div>
                      </div>
                      <div className='srv_icon'>
                        <div>
                          <img src={servicio.img} alt={servicio.img} width='210px' />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
        </div>
        <section>
          <CTN />
          <div>
            <Footer />
          </div>
        </section>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className='services_container'>
        <div className='srv_cards'>
          <div className='srv_title'>
            <h1>Nuestros Servicios</h1>
          </div>
          <section>
            <Slider>
              {servicios.map((servicios) => (
                <div className='slider_cards'>
                  <Card_srv_flip
                    image={servicios.img}
                    title={servicios.title}
                    sub={servicios.sub}
                    des_1={servicios.des_1}
                    des_2={servicios.des_2}
                    des_3={servicios.des_3}
                  ></Card_srv_flip>
                </div>
              ))}
            </Slider>
          </section>
        </div>
      </div>
      <section>
        <CTN />
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
};

export default Services;
