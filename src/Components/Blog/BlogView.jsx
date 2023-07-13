import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase-config';
import { Header } from '../Header/header';
import './BlogView.css';
import './blog.css';
import Footer from '../Footer/Footer';
import Sidebar from './Sidebar';
import CTN from '../CTN/CTN';
import Contact_button from '../Home/Contact_button/Contact_button';
import '../Home/Contact_button/contact_button.css';
import YouTube from 'react-youtube';

function BlogView() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const getPost = async () => {
      const postDoc = doc(db, 'posts', id);
      const docSnapshot = await getDoc(postDoc);
      if (docSnapshot.exists()) {
        setPost(docSnapshot.data());
      } else {
        console.log('El post no existe');
      }
    };

    getPost();
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  function getYouTubeVideoId(url) {
    if (!url) {
      return null;
    }
    const regExp =
      /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]+)/;
    const match = url.match(regExp);
    return match && match[1];
  }

  return (
    <>
      <div className='BlogView'>
        <Header />
        <Contact_button />

        <h1 className='blogTitle'>{post.title}</h1>
        <div className='blogView-sidebar'>
          <div className='blogContainer'>
            <div className='blogCard'>
              <img className='blogImg' src={post.imageUrl} alt='' />
              <div className='blogText'>
                <p>{post.postText}</p>
                {post.additionalContent && (
                  <div>
                    <p>{post.additionalContent}</p>
                  </div>
                )}
                {post.youtubeLink && (
                  <div className='youtubePlayer'>
                    <YouTube videoId={getYouTubeVideoId(post.youtubeLink)} />
                  </div>
                )}
              </div>
            </div>
          </div>
          <Sidebar />
        </div>
        <div className='date-tagContainer'>
          <div className='date-tags'>
            <p>11:50AM | Jul 5, 2023</p>
            <hr />
            <p>Tag #1, Tag #2, Tag #3</p>
          </div>
        </div>
        <div className='ctn'>
          <CTN />
        </div>
        <div className='footer-blogView'>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default BlogView;
