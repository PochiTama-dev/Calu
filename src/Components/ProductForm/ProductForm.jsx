import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
  setDoc,
} from "firebase/firestore";
import { db, storage } from "../../firebase-config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import "./product-form.css";
import { Header } from "../Header/header";

function ProductForm({ productId }) {
  const [title, setTitle] = useState("");
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [thumbnailName, setThumbnailName] = useState("");
  const [compressedFile, setCompressedFile] = useState(null);
  const [compressedFileName, setCompressedFileName] = useState("");
  const [price, setPrice] = useState("");
  const [detail, setDetail] = useState("");
  const [category, setCategory] = useState("");
  const [uploading, setUploading] = useState(false);

  const history = useNavigate();
  const location = useLocation();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      setUploading(true);

      let thumbnailURL = "";
      if (thumbnailFile) {
        const thumbnailRef = ref(storage, `thumbnails/${thumbnailFile.name}`);
        await uploadBytes(thumbnailRef, thumbnailFile);
        thumbnailURL = await getDownloadURL(thumbnailRef);
      }

      let compressedURL = "";
      if (compressedFile) {
        const compressedRef = ref(storage, `compressed/${compressedFile.name}`);
        await uploadBytes(compressedRef, compressedFile);
        compressedURL = await getDownloadURL(compressedRef);
      }

      const productData = {
        title,
        thumbnail: thumbnailURL,
        compressed: compressedURL,
        price: price || "Gratis",
        detail,
        category,
        createdAt: serverTimestamp(),
      };

      if (productId) {
        const productDoc = setDoc(doc(db, "e-commerce", productId));
        await updateDoc(productDoc, productData);
        console.log("Producto actualizado con ID:", productId);
      } else {
        const docRef = await addDoc(collection(db, "e-commerce"), productData);
        console.log("Producto agregado con ID:", docRef.id);
      }

      setTitle("");
      setThumbnailFile(null);
      setThumbnailName("");
      setCompressedFile(null);
      setCompressedFileName("");
      setPrice("");
      setDetail("");
      setCategory("");
      setUploading(false);

      history("/product-list"); // Navegar de vuelta a la lista de productos después de agregar/editar
    } catch (error) {
      console.error("Error al agregar o editar el producto:", error);
      setUploading(false);
    }
  };

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setThumbnailName(file.name);
      setThumbnailFile(file);
    }
  };

  const handleCompressedChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (
        file.type === "application/x-rar-compressed" ||
        file.type === "application/zip"
      ) {
        setCompressedFileName(file.name);
        setCompressedFile(file);
      } else {
        alert("Solo se permiten archivos .rar o .zip.");
      }
    }
  };

  useEffect(() => {
    if (location.state && location.state.productToEdit) {
      const { productToEdit } = location.state;
      setTitle(productToEdit.title);
      setPrice(productToEdit.price);
      setDetail(productToEdit.detail);
      setCategory(productToEdit.category);
    } else if (productId) {
      const fetchProductData = async () => {
        try {
          const productDoc = doc(db, "e-commerce", productId);
          const productSnapshot = await getDoc(productDoc);
          if (productSnapshot.exists()) {
            const productData = productSnapshot.data();
            setTitle(productData.title);
            setPrice(productData.price);
            setDetail(productData.detail);
            setCategory(productData.category);
          }
        } catch (error) {
          console.error("Error al obtener los datos del producto:", error);
        }
      };

      fetchProductData();
    }
  }, [location.state, productId]);

  return (
    <div>
      <Header></Header>
      <div className="additional-div"></div>
    <div className="main-form-container">

      <h2>
        {location.state && location.state.productToEdit
          ? "Editar Producto"
          : "Agregar Producto"}
      </h2>

      <form onSubmit={handleFormSubmit}>
        <div className="container-form">
          <div className="title-form">
            <label htmlFor="title">Título:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Titulo..."
            />
          </div>

          <div className="mini-form">
            <label htmlFor="thumbnail">Miniatura:</label>
            <input
              type="file"
              id="thumbnail"
              onChange={handleThumbnailChange}
            />
            {thumbnailName && <p>Archivo seleccionado: {thumbnailName}</p>}
          </div>

          <div className="compressed-form">
            <label htmlFor="compressed">Archivo Comprimido:</label>
            <input
              type="file"
              id="compressed"
              onChange={handleCompressedChange}
            />
            {compressedFileName && (
              <p>Archivo seleccionado: {compressedFileName}</p>
            )}
          </div>

          <div className="category-form">
            <label htmlFor="category">Categoría:</label>
            <input
              type="text"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Categoría..."
            />
          </div>

          <div className="price-form">
            <label htmlFor="price">Precio:</label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="detail-form">
            <label htmlFor="detail">Detalle:</label>
            <textarea
              id="detail"
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
            ></textarea>
          </div>

          <button onClick={handleFormSubmit}>
            {location.state && location.state.productToEdit
              ? "Actualizar Producto"
              : "Agregar Producto"}
          </button>
        </div>
      </form>
      </div>
      <div className="additional-div"></div>
    </div>
  );
}

export default ProductForm;
