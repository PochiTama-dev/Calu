import React, { useEffect, useState } from 'react';
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore';
import { auth, db } from '../../firebase-config';
import { useNavigate } from 'react-router-dom';
import { Header } from '../Header/header';
import Footer from '../Footer/Footer';
import './blog.css';
import CardBlogDev from './CardBlogDev';
import CTN from '../CTN/CTN';
import Sidebar from './Sidebar';
import Contact_button from '../Home/Contact_button/Contact_button';
import '../Home/Contact_button/contact_button.css';

// TODO: Borrar CardBlogDev

function Blog({ isAuth }) {
  const [postList, setPostList] = useState([]);
  const postsCollectionRef = collection(db, 'posts');
  const navigate = useNavigate();

  const deletePost = async (id) => {
    const postDoc = doc(db, 'posts', id);
    await deleteDoc(postDoc);
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
  }, [deletePost]);

  return (
    <>
      <Header />
      <Contact_button />
      <div className='BlogPage'>
        <h1 className='blogTitle'>NUESTRO BLOG</h1>
        <div className='postContainer'>
          <div className='cardContainerblog'>
            {postList.map((post) => (
              <div className='card-blog' key={post.id}>
                <div className='cardHeaderblog'>
                  <div className='titleblog'>
                    <p>{post.title}</p>
                  </div>
                  <div className='deleteblog'>
                    {isAuth && post.author && post.author.id === auth.currentUser.uid && (
                      <>
                        <button
                          onClick={() => {
                            deletePost(post.id);
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
                <div className='cardTextblogContainer'>{post.postText}</div>
                {post.author && <h3>@{post.author.name}</h3>}
                <button className='viewButton' onClick={() => handlePostClick(post.id)}>
                  Leer Más
                </button>
              </div>
            ))}
            <CardBlogDev deletePost={deletePost()} handlePostClick={handlePostClick} />
            <CardBlogDev deletePost={deletePost()} handlePostClick={handlePostClick} />
            <CardBlogDev deletePost={deletePost()} handlePostClick={handlePostClick} />
            <CardBlogDev deletePost={deletePost()} handlePostClick={handlePostClick} />
            <CardBlogDev deletePost={deletePost()} handlePostClick={handlePostClick} />
            <CardBlogDev deletePost={deletePost()} handlePostClick={handlePostClick} />
            <CardBlogDev deletePost={deletePost()} handlePostClick={handlePostClick} />
            <CardBlogDev deletePost={deletePost()} handlePostClick={handlePostClick} />
          </div>
        </div>
        {/* <div className='cardContainerblog'></div>
          <div className='cardContainerblog'></div>
          <div className='cardContainerblog'></div>
          <div className='cardContainerblog'></div> */}
      </div>
      <Sidebar />
      <div className='ctn'>
        <CTN />
      </div>
      <div className='footer-blog'>
        <Footer />
      </div>
    </>
  );
}

export default Blog;
