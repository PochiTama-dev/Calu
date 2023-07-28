// Blog.js
import React, { useEffect, useState, useRef } from 'react';
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore';
import { auth, db, storage } from '../../firebase-config';
import { useNavigate } from 'react-router-dom';
import { ref, deleteObject } from 'firebase/storage';
import { Header } from '../Header/header';
import Footer from '../Footer/Footer';
import './blog.css';
import CTN from '../CTN/CTN';
import Sidebar from './Sidebar';
import Contact_button from '../Home/Contact_button/Contact_button';
import '../Home/Contact_button/contact_button.css';
import CardNews from '../News/Card_news/Card_news';
import arrow_L from '../Home/icon_arrow_left.svg';
function Blog({ isAuth }) {
  const [postList, setPostList] = useState([]);
  const [hover, sethover] = useState(false);

  const postsCollectionRef = collection(db, 'posts');
  const navigate = useNavigate();

  const deletePost = async (id, imageUrl) => {
    const postDoc = doc(db, 'posts', id);
    await deleteDoc(postDoc);

    if (imageUrl) {
      const imageRef = ref(storage, imageUrl);
      await deleteObject(imageRef);
    }

    // Actualizar la lista de publicaciones después de eliminar
    setPostList((prevList) => prevList.filter((post) => post.id !== id));
  };

  const handlePostClick = (id) => {
    navigate(`/blog/${id}`);
  };

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, []);

  const handleMouseEnter = (id) => {
    sethover(id);
  };

  const handleMouseLeave = () => {
    sethover(null);
  };
  //////////// Scroll to top
  const firstSection = useRef(null);
  const scrollToTop = () => {
    firstSection.current?.scrollIntoView({ behavior: 'smooth' });
  };
  //////////////
  return (
    <div className='blog'>
      <button onClick={scrollToTop}>
        <img className='arrow_up' src={arrow_L} />
      </button>

      <Header />
      <Contact_button />
      <div className='BlogPage' ref={firstSection}>
        <h1 className='blogTitle'>NUESTRO BLOG</h1>
        <div className='blog-sidebar'>
          <div className='postContainer'>
            <div className='cardContainerblog'>
              {postList.map((post) => (
                <div
                  className='card-blog'
                  key={post.id}
                  onClick={() => handlePostClick(post.id)}
                  onMouseEnter={() => handleMouseEnter(post.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className='blogImage'>
                    <CardNews
                      image={
                        <img
                          className='icons_novedades'
                          src={post.imageUrl}
                          alt={post.imageUrl}
                          width='50%'
                        />
                      }
                      description={post.postText}
                      title={<h2>{post.title}</h2>}
                    />
                  </div>
                  {hover === post.id && <p className='leerMas'>{'LEER MÁS'}</p>}
                  <div className='cardHeaderblog'>
                    <div className='titleblog'></div>
                    <span>{post.time}</span>
                    <div className='deleteblog'>
                      {isAuth && post.author && post.author.id === auth.currentUser?.uid && (
                        <>
                          <button
                            onClick={() => {
                              deletePost(post.id, post.imageUrl);
                            }}
                            className='deleteblogButton'
                          >
                            &#128465; Delete
                          </button>
                          <button
                            onClick={() => {
                              // Lógica para editar el post
                            }}
                            className='editblogButton'
                          >
                            &#9998; Edit
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Sidebar />
        </div>
      </div>
      <div className='ctn'>
        <CTN />
      </div>
      <div className='footer-blog'>
        <Footer />
      </div>
    </div>
  );
}

export default Blog;
