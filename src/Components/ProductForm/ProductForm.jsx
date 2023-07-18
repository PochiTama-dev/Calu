import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db, storage } from "../../firebase-config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

function ProductForm() {
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState("");
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      setUploading(true);

      // Subir la imagen de la miniatura a Firebase Storage
      let downloadURL = "";
      if (thumbnailFile) {
        const storageRef = ref(storage, `images/${thumbnailFile.name}`);
        await uploadBytes(storageRef, thumbnailFile);
        downloadURL = await getDownloadURL(storageRef);
      }

      const productData = {
        title,
        thumbnail: downloadURL,
        detail,
        price,
      };

      // Agregar el producto a la colección "e-commerce" en Firebase Firestore
      const docRef = await addDoc(collection(db, "e-commerce"), productData);

      console.log("Producto agregado con ID:", docRef.id);

      // Reiniciar los campos del formulario
      setTitle("");
      setThumbnail("");
      setDetail("");
      setPrice("");
      setThumbnailFile(null);
      setUploading(false);
    } catch (error) {
      console.error("Error al agregar el producto:", error);
      setUploading(false);
    }
  };

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setThumbnail(file.name);
      setThumbnailFile(file);
    }
  };

  return (
    <div>
      <h2>Agregar Producto</h2>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="thumbnail">Miniatura:</label>
        <input
          type="file"
          id="thumbnail"
          onChange={handleThumbnailChange}
        />
        {thumbnail && <p>Archivo seleccionado: {thumbnail}</p>}

        <label htmlFor="detail">Detalle:</label>
        <textarea
          id="detail"
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
        ></textarea>

        <label htmlFor="price">Precio:</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button type="submit" disabled={uploading}>
          {uploading ? "Subiendo..." : "Agregar Producto"}
        </button>
      </form>
    </div>
  );
}

export default ProductForm;
