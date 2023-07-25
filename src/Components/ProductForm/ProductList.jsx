import { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db, storage } from "../../firebase-config";
import { Link, useNavigate } from "react-router-dom";
import { ref, deleteObject } from "firebase/storage";
import './product-list.css'


function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [flippedProductId, setFlippedProductId] = useState(null);
  const isUserAuthenticated = localStorage.getItem("isAuth") === "true";
  const navigate = useNavigate();

  const productsCollectionRef = collection(db, "e-commerce");

  const deleteProduct = async (id, thumbnail) => {
    const productDoc = doc(db, "e-commerce", id);
    await deleteDoc(productDoc);

    if (thumbnail) {
      const thumbnailRef = ref(storage, thumbnail);
      await deleteObject(thumbnailRef);
    }

    // Update the product list after deleting
    setProducts((prevList) => prevList.filter((product) => product.id !== id));
  };

  const handleEditProduct = (productId) => {
    const productToEdit = products.find((product) => product.id === productId);
    navigate(`/product-form`, { state: { productToEdit } });
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(productsCollectionRef);
        const productsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsData);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [productsCollectionRef]);

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  if (products.length === 0) {
    return <p>No se encontraron productos.</p>;
  }

  const handleFlipCard = (productId) => {
    setFlippedProductId(productId === flippedProductId ? null : productId);
  };


  return (
    <div className="main-container">
      <h2>Lista de Productos</h2>
      <p className="our-products">Nuestro productos</p>
    
      <div className="products">
        {products.map((product) => (
          <div className='main-product' key={product.id}>
            <div
              className={`product-inner ${flippedProductId === product.id ? "flipped" : ""}`}
              onClick={() => handleFlipCard(product.id)}
            >
              <div className={`product-front ${flippedProductId === product.id ? "hidden" : ""}`}>
                <h3>{product.title}</h3>
                <img src={product.thumbnail} alt={product.title} />
              </div>
              <div className={`product-back ${flippedProductId === product.id ? "" : "hidden"}`}>
                <p>{product.detail}</p>
              </div>
            </div>
            <div className="product-price">
              <p className="price">Precio: ${product.price}</p>
              <p className="carrito-price">Agregar al carrito</p>
              <Link to={`/product/${product.id}`}>Ver detalles</Link>
            </div>
            {isUserAuthenticated && (
              <>
                <button onClick={() => handleEditProduct(product.id)}>Editar</button>
                <button onClick={() => deleteProduct(product.id, product.thumbnail)}>Eliminar</button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
