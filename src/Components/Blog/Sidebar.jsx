import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className='lateralBar'>
      <h2 className='blogTitle'>Novedades</h2>
      <div className='lateralContainer'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ullam sunt ab id
          exercitationem quis!
        </p>
        <Link to={'/blog/1'}>ver mas</Link>
      </div>
      <hr />
      <div className='lateralContainer'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ullam sunt ab id
          exercitationem quis!
        </p>
        <Link to={'/blog/1'}>ver mas</Link>
      </div>
      <hr />
      <div className='lateralContainer'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ullam sunt ab id
          exercitationem quis!
        </p>
        <Link to={'/blog/1'}>ver mas</Link>
      </div>
      <hr />
      <div className='lateralContainer'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ullam sunt ab id
          exercitationem quis!
        </p>
        <Link to={'/blog/1'}>ver mas</Link>
      </div>
      <hr />
      <div className='lateralContainer'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ullam sunt ab id
          exercitationem quis!
        </p>
        <Link to={'/blog/1'}>ver mas</Link>
      </div>
      <hr />
      <div className='lateralContainer'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ullam sunt ab id
          exercitationem quis!
        </p>
        <Link to={'/blog/1'}>ver mas</Link>
      </div>
      <hr />
    </aside>
  );
};
export default Sidebar;
