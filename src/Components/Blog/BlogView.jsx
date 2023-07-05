import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase-config';
import { Header } from '../Header/header';

import './BlogView.css';
import './blog.css';
import Footer from '../Footer/Footer';

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

  //cambiar a !post el condicional para que use los datos de firebase
  if (post) {
    return <div>Loading...</div>;
  }

  return (
    <div className='BlogView'>
      <Header />
      {post && (
        <>
          <h1 className='blogTitle'>{post.title}</h1>
          <div className='blogContainer'>
            <div className='blogCard'>
              <div>{post.postText}</div>
              <div>{post.author.name}</div>
            </div>
          </div>
        </>
      )}
      <h1 className='blogTitle'>Titulo del post</h1>
      <div className='blogContainer'>
        <div className='blogCard'>
          <img
            className='blogImg'
            src='http://eguzkieco-jardin.com/wp-content/uploads/2016/05/bosque.'
            alt='asdasd'
          />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione hic optio minima a
            blanditiis magnam, cumque perferendis. Voluptate, saepe tempora a voluptatem soluta
            laudantium rerum maiores ex in impedit quis modi nobis temporibus incidunt dicta libero
            recusandae ea, explicabo qui id voluptas quas sit totam consequatur! Ducimus beatae
            molestiae asperiores.
          </p>
          <h2>subtitulo</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, nihil quae ex non
            velit exercitationem deleniti aspernatur quis ipsa ullam in delectus inventore, ratione
            laborum quaerat praesentium asperiores nam, aliquam necessitatibus. Pariatur, est odit
            reprehenderit eaque corrupti tempora et distinctio temporibus saepe adipisci minima
            dicta incidunt iste velit? Quas, nostrum?
          </p>
          <div>Autor: Facu</div>
        </div>
      </div>
      <div className='date-tagContainer'>
        <div className='date-tags'>
          <p>11:50AM | Jul 5, 2023</p>
          <hr />
          <p>Tag #1, Tag #2, Tag #3</p>
        </div>
      </div>
      <div className='footer-blogView'>
        <Footer />
      </div>
    </div>
  );
}

export default BlogView;
