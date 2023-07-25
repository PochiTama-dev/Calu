import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db, storage } from "../../firebase-config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import './product-form.css'


function ProductForm() {
  const [title, setTitle] = useState("");
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [thumbnailName, setThumbnailName] = useState("");
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfName, setPdfName] = useState("");
  const [price, setPrice] = useState("");
  const [detail, setDetail] = useState("");
  const [uploading, setUploading] = useState(false);

  let history = useNavigate();
  let location = useLocation();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      setUploading(true);

      // Subir la miniatura a Firebase Storage
      let thumbnailURL = "";
      if (thumbnailFile) {
        const thumbnailRef = ref(storage, `thumbnails/${thumbnailFile.name}`);
        await uploadBytes(thumbnailRef, thumbnailFile);
        thumbnailURL = await getDownloadURL(thumbnailRef);
      }

      // Subir el archivo PDF a Firebase Storage
      let pdfURL = "";
      if (pdfFile) {
        const pdfRef = ref(storage, `pdfs/${pdfFile.name}`);
        await uploadBytes(pdfRef, pdfFile);
        pdfURL = await getDownloadURL(pdfRef);
      }

      const productData = {
        title,
        thumbnail: thumbnailURL,
        pdf: pdfURL,
        price: price || "Gratis",
        detail,
      };

      // Agregar el producto a la colección "e-commerce" en Firebase Firestore
      const docRef = await addDoc(collection(db, "e-commerce"), productData);

      console.log("Producto agregado con ID:", docRef.id);

      setTitle("");
      setThumbnailFile(null);
      setThumbnailName("");
      setPdfFile(null);
      setPdfName("");
      setPrice("");
      setDetail("");
      setUploading(false);

      // Navigate back to the ProductList after adding a new product
      history("/"); // Changed history.push("/") to history("/")
    } catch (error) {
      console.error("Error al agregar el producto:", error);
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

  const handlePdfChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPdfName(file.name);
      setPdfFile(file);
    }
  };

  useEffect(() => {
    if (location.state && location.state.productToEdit) {
      if (!thumbnailFile) {
        setThumbnailName("Thumbnail already uploaded");
      }
      if (!pdfFile) {
        setPdfName("PDF already uploaded");
      }

      const { productToEdit } = location.state;
      setTitle(productToEdit.title);
      setPrice(productToEdit.price);
      setDetail(productToEdit.detail);
    }
  }, [location.state, thumbnailFile, pdfFile]);

  return (
    <div className="main-form-container">
      <h2>{location.state && location.state.productToEdit ? "Editar Producto" : "Agregar Producto"}</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="container-form">

          <div className="title-form">
            <label htmlFor="title">Título:</label>
            <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Titulo..."/>
          </div>

          <div className="mini-form">
            <label htmlFor="thumbnail">Miniatura:</label>
            <input type="file" id="thumbnail" onChange={handleThumbnailChange} />
            {thumbnailName && <p>Archivo seleccionado: {thumbnailName}</p>}
          </div>
          <div className="pdf-form">
            <label htmlFor="pdf">PDF:</label>
            <input type="file" id="pdf" onChange={handlePdfChange} />
            {pdfName && <p>Archivo seleccionado: {pdfName}</p>}
          </div>

          <div className="price-form">
            <label htmlFor="price">Precio:</label>
            <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />
          </div>

          <div className="detail-form">
            <label htmlFor="detail">Detalle:</label>
            <textarea id="detail" value={detail} onChange={(e) => setDetail(e.target.value)}></textarea>
          </div>

          <button type="submit" disabled={uploading}>
            {uploading ? "Subiendo..." : "Agregar Producto"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProductForm;
