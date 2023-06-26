import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../../firebase-config";

function Blog({ isAuth }) {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, [deletePost]);

  return (
    <div className="BlogPage">
      {postLists.map((post) => {
        return (
          <div className="post">
            <div className="postHeader">
              <div className="title">
                <h1>{post.title}</h1>
              </div>
              <div className="deletePost">
                {isAuth && post.author && post.author.id === auth.currentUser.uid && (
                  <>
                    <button
                      onClick={() => {
                        deletePost(post.id);
                      }}
                      className="deleteButton"
                    >
                      &#128465; Delete
                    </button>
                    <button
                      onClick={() => {
                        // Lógica para editar el post
                      }}
                      className="editButton"
                    >
                      &#9998; Edit
                    </button>
                  </>
                )}
              </div>
            </div>
            <div className="postTextContainer">{post.postText}</div>
            {post.author && <h3>@{post.author.name}</h3>}
          </div>
        );
      })}
    </div>
  );
}

export default Blog;
