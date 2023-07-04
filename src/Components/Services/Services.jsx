import './services.css';
import React from 'react';
import { Header } from '../Header/header';
import servicios from './constants';
import Slider from '../Services/Card_srv/Slider/Slider';
import Card_srv_flip from './Card_srv/Card_srv_flip';
import Footer from '../Footer/Footer';
import CTN from '../CTN/CTN';

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

  if (width > breakpoint) {
    return (
      <>
        <Header />;
        <div className='services_container'>
          <div className='srv_title'>
            <h1>Nuestros Servicios</h1>
          </div>
          <div>
            {servicios.map((servicio, index) => {
              if (index % 2 === 0) {
                const nextService = servicios[index + 1];
                return (
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
                        <div>{servicio.img}</div>
                      </div>
                    </div>
                    <div className='card_srv_cont'>
                      <div className='card_srv_info'>
                        <div className='title_srv'>{nextService.title}</div>
                        <div className='sub_d'>{nextService.sub}</div>
                        <div className='des_1d'>
                          <div>{nextService.des_1}</div>
                          <br />
                          <div>{nextService.des_2}</div>
                        </div>
                        <div className='des_3d'>{nextService.des_3}</div>
                      </div>
                      <div className='srv_icon'>
                        <div>{nextService.img}</div>
                      </div>
                    </div>
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
        <CTN />
        <div className='footer-services'>
          <Footer />
        </div>
      </>
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
          <Slider>
            {servicios.map((servicios) => (
              <div>
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
        </div>
      </div>
      <CTN />
      <div className='footer-services'>
        <Footer />
      </div>
    </>
  );
};

export default Services;
