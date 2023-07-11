import CardOur from '../OurServices/Card_OurService/Card_our';
import './Sidebar.css';
const Sidebar = () => {
  return (
    <aside className='lateralBar'>
      <h2 className='blogTitle'>Novedades</h2>
      <div className='lateralContainer'>
        <CardOur
          image={<img className='icono-servicios' src={''} alt='icono' />}
          title={
            <p className='text-icono-servicios'>
              Lorem, ipsum.
              <p className='paragraph'>Lorem ipsum dolor sit amet.</p>
            </p>
          }
          btn={
            <a className=' button_portfolio' href='#'>
              Ver más
            </a>
          }
        ></CardOur>
      </div>
      <hr />
      <div className='lateralContainer'>
        <CardOur
          image={<img className='icono-servicios' src={''} alt='icono' />}
          title={
            <p className='text-icono-servicios'>
              Lorem, ipsum.
              <p className='paragraph'>Lorem ipsum dolor sit amet.</p>
            </p>
          }
          btn={
            <a className=' button_portfolio' href='#'>
              Ver más
            </a>
          }
        ></CardOur>
      </div>
      <hr />
      <div className='lateralContainer'>
        <CardOur
          image={<img className='icono-servicios' src={''} alt='icono' />}
          title={
            <p className='text-icono-servicios'>
              Lorem, ipsum.
              <p className='paragraph'>Lorem ipsum dolor sit amet.</p>
            </p>
          }
          btn={
            <a className=' button_portfolio' href='#'>
              Ver más
            </a>
          }
        ></CardOur>
      </div>
      <hr />
    </aside>
  );
};
export default Sidebar;
