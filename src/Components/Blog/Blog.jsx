import React, { useEffect, useState, useRef } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db, storage } from "../../firebase-config";
import { useNavigate } from "react-router-dom";
import { ref, deleteObject, getDownloadURL } from "firebase/storage";
import { Header } from "../Header/header";
import Footer from "../Footer/Footer";
import "./blog.css";
import CTN from "../CTN/CTN";
import Sidebar from "./Sidebar";
import Contact_button from "../Home/Contact_button/Contact_button";
import "../Home/Contact_button/contact_button.css";
import CardNews from "../News/Card_news/Card_news";
import arrow_L from "../Home/icon_arrow_left.svg";

function Blog({ isAuth }) {
  const [postList, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [editingPost, setEditingPost] = useState(null);

  const postsCollectionRef = collection(db, "posts");
  const navigate = useNavigate();

  const deletePost = async (id, imageUrl) => {
    setIsLoading(true);
    const postDoc = doc(db, "posts", id);

    try {
      if (imageUrl) {
        const imageRef = ref(storage, imageUrl);
        await getDownloadURL(imageRef);
        await deleteObject(imageRef);
      }

      await deleteDoc(postDoc);
    } catch (error) {
      console.error("Error deleting post:", error);
    } finally {
      setIsLoading(false);
    }
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

  const firstSection = useRef(null);
  const scrollToTop = () => {
    firstSection.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Función para manejar el evento de edición
  const handleEditPost = (post) => {
    navigate(`/edit-post`, { state: { editPost: post } });
  };

  return (
    <div className="blog">
      <button onClick={scrollToTop}>
        <img className="arrow_up" src={arrow_L} alt="Arrow Up" />
      </button>

      <Header />
      <Contact_button />
      <div className="BlogPage" ref={firstSection}>
        <h1 className="blogTitle_">NUESTRO BLOG</h1>
        <div className="blog-sidebar">
          <div className="postContainer">
            <div className="cardContainerblog">
              {postList.map((post) => (
                <div
                  className="card-blog"
                  key={post.id}
                  onClick={() => handlePostClick(post.id)}
                >
                  <div className="blogImage">
                    <CardNews
                      image={
                        <img
                          className="icons_novedades"
                          src={post.imageUrl}
                          alt={post.imageUrl}
                          width="50%"
                        />
                      }
                      description={post.postText}
                      title={<h2>{post.title}</h2>}
                    />
                  </div>
                  <div className="cardHeaderblog">
                    <span>{post.time}</span>
                    <div className="deleteblog">
                      {isAuth &&
                        post.author &&
                        post.author.id === auth.currentUser?.uid && (
                          <>
                            <button
                              onClick={() => {
                                deletePost(post.id, post.imageUrl);
                              }}
                              className="deleteblogButton"
                              disabled={isLoading}
                            >
                              {isLoading ? "Deleting..." : "Delete"}
                            </button>
                            <button
                              onClick={() => {
                                handleEditPost(post); // Llama a la función de edición con el post actual
                              }}
                              className="editblogButton"
                            >
                              Edit
                            </button>
                          </>
                        )}
                    </div>
                  </div>
                  <div className="cardFooterblog"></div>
                </div>
              ))}
            </div>
          </div>

          <Sidebar />
        </div>
      </div>
      <div className="ctn">
        <CTN />
      </div>
      <div className="footer-blog">
        <Footer />
      </div>
    </div>
  );
}

export default Blog;
