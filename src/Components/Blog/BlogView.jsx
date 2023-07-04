import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase-config';
import { Header } from '../Header/header';

function BlogView() {
  const { id } = useParams(); // Obtiene el ID del parámetro de la URL
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

  return (
    <div className='BlogView'>  
    <Header />
      <h1>{post.title}</h1>
      <div>{post.postText}</div>
<div>{post.author.name}</div>
    </div>
  );
}

export default BlogView;
