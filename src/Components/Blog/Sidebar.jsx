import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className='lateralBar'>
      <h2 className='blogTitle'>Novedades</h2>
      <div className='lateralContainer'>
        <Link to={'#'}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ullam sunt ab id
          exercitationem quis!
        </Link>
      </div>
      <hr />
      <div className='lateralContainer'>
        <Link to={'#'}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ullam sunt ab id
          exercitationem quis!
        </Link>
      </div>
      <hr />
      <div className='lateralContainer'>
        <Link to={'#'}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ullam sunt ab id
          exercitationem quis!
        </Link>
      </div>
      <hr />
    </aside>
  );
};
export default Sidebar;
