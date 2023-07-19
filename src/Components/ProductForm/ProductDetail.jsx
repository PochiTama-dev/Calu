import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productDoc = doc(db, "e-commerce", id);
        const productSnapshot = await getDoc(productDoc);

        if (productSnapshot.exists()) {
          setProduct({ id: productSnapshot.id, ...productSnapshot.data() });
        } else {
          console.log("No se encontró el producto");
        }

        setLoading(false);
      } catch (error) {
        console.error("Error al obtener el producto:", error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <p>Cargando producto...</p>;
  }

  if (!product) {
    return <p>No se encontró el producto.</p>;
  }

  const handleDownload = () => {
    // Lógica para descargar el e-book
    if (product.pdf !== 0 && product.pdf !== null) {
      const a = document.createElement("a");
      a.href = product.pdf;
      a.download = `${product.title}.pdf`;
      a.target = "_blank"; // Agregar esta línea para abrir en nueva pestaña
      a.click();
    }
  };

  const handleBuy = () => {
    // Lógica para comprar el e-book
    console.log("Comprando el e-book:", product.title);
  };

  return (
    <div>
      <h2>Detalle del Producto</h2>
      <h3>{product.title}</h3>
      <img src={product.thumbnail} alt={product.title} />
      <p>{product.detail}</p>
      {product.price !== 'Gratis' && product.price !== null ? (
        <>
          <p>Precio: ${product.price}</p>
          <button onClick={handleBuy}>Comprar</button>
        </>
      ) : (
        <button onClick={handleDownload}>Descargar</button>
      )}
    </div>
  );
}

export default ProductDetail;
