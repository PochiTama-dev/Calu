import { Link, useNavigate } from 'react-router-dom';
import './Sidebar.css';
import { useEffect, useState } from 'react';
import { collection, getDocs, limitToLast, orderBy, query } from 'firebase/firestore';
import { db } from '../../firebase-config';

const Sidebar = () => {
  const [postList, setPostList] = useState([]);
  const navigate = useNavigate();
  const queryDocs = query(collection(db, 'posts'), orderBy('__name__'), limitToLast(2));
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(queryDocs);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, [queryDocs]);
  const handlePostClick = (id) => {
    navigate(`/blog/${id}`);
  };
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
        <h2 className='blogTitle'>Blogs anteriores</h2>
        <div className='lastBlogs'>
          {postList.map((post, index) => (
            <div className='last' onClick={() => handlePostClick(post.id)} key={index}>
              <img src={post.imageUrl} alt={post.imageUrl} />
              <p>{post.title}</p>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};
export default Sidebar;
