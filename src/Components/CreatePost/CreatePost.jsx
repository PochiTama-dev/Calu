import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth, storage } from "../../firebase-config";
import { useNavigate } from "react-router-dom";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import "./createPost.css";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const [image, setImage] = useState(null);
  const [youtubeLink, setYoutubeLink] = useState("");
  const [additionalContent, setAdditionalContent] = useState("");
  const postsCollectionRef = collection(db, "posts");
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthentication = () => {
      const user = auth.currentUser;
      if (!user) {
        navigate("/admin-login");
      }
    };

    checkAuthentication();
  }, []);

  const createPost = async () => {
    let imageUrl = "";
    if (image) {
      const storageRef = ref(storage, `images/${image.name}`);
      await uploadBytes(storageRef, image);
      imageUrl = await getDownloadURL(storageRef);
    }

    const newPost = {
      title,
      postText,
      imageUrl,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
      youtubeLink,
      additionalContent
    };

    await addDoc(postsCollectionRef, newPost);
    navigate("/blog");
  };

  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1>Create A Post</h1>
        <div className="inputGp">
          <label>Title:</label>
          <input
            placeholder="Title..."
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div className="inputGp">
          <label>Post:</label>
          <textarea
            placeholder="Post..."
            value={postText}
            onChange={(event) => {
              setPostText(event.target.value);
            }}
          />
        </div>
        <div className="inputGp">
          <label>Image:</label>
          <input type="file" onChange={(event) => setImage(event.target.files[0])} />
        </div>
        <div className="inputGp">
          <label>YouTube Link:</label>
          <input
            placeholder="YouTube link..."
            value={youtubeLink}
            onChange={(event) => {
              setYoutubeLink(event.target.value);
            }}
          />
        </div>
        <div className="inputGp">
          <label>Additional Content:</label>
          <textarea
            placeholder="Additional content..."
            value={additionalContent}
            onChange={(event) => {
              setAdditionalContent(event.target.value);
            }}
          />
        </div>
        <button onClick={createPost}>Submit Post</button>
      </div>
    </div>
  );
}

export default CreatePost;
