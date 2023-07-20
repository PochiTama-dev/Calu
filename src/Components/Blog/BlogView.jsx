import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import { Header } from "../Header/header";
import "./BlogView.css";
import "./blog.css";
import Footer from "../Footer/Footer";
import Sidebar from "./Sidebar";
import CTN from "../CTN/CTN";
import Contact_button from "../Home/Contact_button/Contact_button";
import "../Home/Contact_button/contact_button.css";

function BlogView() {
  const { id } = useParams(); // Obtiene el ID del parámetro de la URL
  const [post, setPost] = useState(null);

  useEffect(() => {
    const getPost = async () => {
      const postDoc = doc(db, "posts", id);
      const docSnapshot = await getDoc(postDoc);
      if (docSnapshot.exists()) {
        setPost(docSnapshot.data());
      } else {
        console.log("El post no existe");
      }
    };

    getPost();
  }, [id]);

  if (!post) {
    return <div>Loading...</div>; // Muestra un mensaje de carga mientras se obtienen los datos
  }

  return (
    <>
      <div className="BlogView">
        <Header />
        <Contact_button />

        <h1 className="blogTitle">{post.title}</h1>
        <div className="blogContainer">
          <div className="blogCard">
            <img className="blogImg" src={post.imageUrl} alt="" />
            <div className="blogText">
              <p>{post.postText}</p>
              <p style={{ margin: 0 }}>
                <h2>subtitulo</h2>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates, nihil quae ex non velit exercitationem deleniti
                aspernatur quis ipsa ullam in delectus inventore, ratione
                laborum quaerat praesentium asperiores nam, aliquam
                necessitatibus. Pariatur, est odit reprehenderit eaque corrupti
                tempora et distinctio temporibus saepe adipisci minima dicta
                incidunt iste velit? Quas, nostrum?
              </p>
            </div>
            <div>Autor: {post.author.name}</div>
          </div>
          <Sidebar />
        </div>
        <div className="date-tagContainer">
          <div className="date-tags">
            <p>11:50AM | Jul 5, 2023</p>
            <hr />
            <p>Tag #1, Tag #2, Tag #3</p>
          </div>
        </div>

        <CTN />
        <div className="footer-blogView">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default BlogView;
