//CSS
import './Onboarding.css';

import avion from '../../images/Avión solo VF.svg';
import logoCalu from '../../images/logocalu.png';
import { Link } from 'react-router-dom';

//PONER .section123 background transparent
const Onboarding = () => {
  return (
    <>
      <div className='onboarding'>
        <div className='parrafo'>
          <p>Mejora la visibilidad de tu marca </p>
          <p>
            Te aydamos a hacer crecer tu genocio, llevarlo al siguiente nivel y sumarte al
            ecosistema digital.
          </p>
          <p>No dejes pasar la oportunidad, subite a la transformación digital.</p>
        </div>
        <img src={avion} alt='logo avion' className='logoAvion' />
        <img src={logoCalu} alt='logo calu' className='logoCalu' />
      </div>
      <div className='contactFlex'>
        <div className='contact'>
          <Link to={'/contact'}>Contactanos</Link>
        </div>
      </div>
    </>
  );
};
export default Onboarding;
