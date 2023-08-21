import React, { useEffect, useState, useRef } from 'react';
import { addDoc, collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from '../../firebase-config';
import { useNavigate, useParams } from 'react-router-dom';
import { Header } from '../Header/header';
import './product-detail.css';
import cart_ from '../Resources/Card_resources/cart.svg';
import elipse from '../Resources/Card_resources/elipse.svg';
import { useCustomContext } from '../../Hooks/Context/Context';
import ModalBuy from '../Cart/ModalBuy';
import { Link } from 'react-router-dom';
import Contact_button from '../Home/Contact_button/Contact_button';
import arrow_L from '../Home/icon_arrow_left.svg';
function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isDescriptionExpanded, setDescriptionExpanded] = useState(false);

  const [modal, setModal] = useState(false);
  const [email, setEmail] = useState('');
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const navigate = useNavigate();

  const { cart, addToCart, removeFromCart } = useCustomContext();
  const [similarProducts, setSimilarProducts] = useState([]);
  const firstSection = useRef(null);
  const scrollToTop = () => {
    firstSection.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productDoc = doc(db, 'e-commerce', id);
        const productSnapshot = await getDoc(productDoc);

        if (productSnapshot.exists()) {
          const fetched = { id: productSnapshot.id, ...productSnapshot.data() };
          setProduct(fetched);
          similars(fetched);
        } else {
          console.log('No se encontró el producto');
        }
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener el producto:', error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const similars = async (fetched) => {
    const productsSimilars = collection(db, 'e-commerce');
    const similarsSnapshot = await getDocs(productsSimilars);
    if (similarsSnapshot) {
      const products = similarsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      const similars = products.filter((category) => category.category === fetched.category);
      setSimilarProducts(similars);
    }
  };
  if (loading) {
    return <p>Cargando producto...</p>;
  }

  if (!product) {
    return <p>No se encontró el producto.</p>;
  }

  const handleDownload = () => {
    // Lógica para descargar el archivo .rar
    if (product.compressed !== 0 && product.compressed !== null) {
      const a = document.createElement('a');
      a.href = product.compressed;
      a.download = `${product.title}.rar`;
      a.target = '_blank'; // Agregar esta línea para abrir en nueva pestaña
      a.click();
    }
  };

  const handleBuy = () => {
    // Lógica para comprar el e-book
    console.log('Comprando el e-book:', product.title);
  };

  const handleDescriptionToggle = () => {
    setDescriptionExpanded(!isDescriptionExpanded);
  };
  const handleAddToCart = async (id) => {
    const querySnapshot = doc(db, 'e-commerce', id);
    const docSnapshot = await getDoc(querySnapshot);
    const productToAdd = docSnapshot.data();
    addToCart(productToAdd);
  };

  const handleDownloadAndBuy = (id) => {
    handleAddToCart(id);
    setModal(true);
    //handleDownload();
  };
  const saveEmailToFirebase = async (email) => {
    try {
      const emailsCollectionRef = collection(db, 'email'); // Change to the correct collection name
      await addDoc(emailsCollectionRef, {
        email,
        timestamp: new Date(),
      });
      console.log('Email saved to Firebase successfully');
    } catch (error) {
      console.error('Error saving email to Firebase:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (email.match(emailRegex)) {
      await saveEmailToFirebase(email); // Save the email to Firebase
      navigate('/payment');
    } else {
      alert('Invalid email format. Please enter a valid email.');
    }
  };

  return (
    <div className='main-detail-container' ref={firstSection}>
      <Header cartItem={cart} handleDelete={removeFromCart} />
      <button className='arrow_up12' onClick={scrollToTop}>
        <img className='arrow_up' src={arrow_L} alt='Arrow Up' />
      </button>
      <Contact_button />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <h2>DETALLE DEL PRODUCTO</h2>
      <div className='main-detail'>
        <div className='img-container'>
          <div className='title-mobile'>
            <h3 className='title-mobile>'>{product.title}</h3>
          </div>
          <img src={product.thumbnail} alt={product.title} />
        </div>

        <div className='detail-content'>
          <div className='title-tablet'>
            <h3>{product.title}</h3>
          </div>

          <p className='price-detail'>{product.detail}</p>
          <p className='e-book'>E-book</p>
          {product.price !== 'Gratis' && product.price !== null ? (
            <div className='buying'>
              <p className='price-p'>Precio: ${product.price}</p>
              <button className='download-button' onClick={handleBuy}>
                Comprar
              </button>
            </div>
          ) : (
            <>
              <button className='download-button' onClick={() => handleDownloadAndBuy(product.id)}>
                Agregar al carrito
              </button>
              <div className='modalBuy'>
                {modal && (
                  <ModalBuy
                    setIsModalOpen={setModal}
                    email={email}
                    setEmail={setEmail}
                    handleSubmit={handleSubmit}
                  />
                )}
              </div>
            </>
          )}
        </div>

        <div className='extra'></div>
        <div className='book-description'>
          <div className='disponibilty'>
            <p className='disponibilidad'>Disponible inmediatamente</p>
          </div>
          <hr />
          <span>
            {isDescriptionExpanded
              ? 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias corporis repellat deleniti? Similique autem eius dolore totam ratione harum obcaecati voluptatem enim quo ipsum accusamus nobis suscipit animi, quod laboriosam, assumenda tempora, magnam eveniet reprehenderit ea! Rem maiores explicabo dolorum. Optio ratione veritatis in obcaecati? Cupiditate dignissimos vel exercitationem enim.'
              : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias corporis repellat deleniti? Similique autem eius dolore totam ratione harum obcaecati voluptatem enim quo ipsum accusamus nobis suscipit animi, quod laboriosam, assumenda tempora, magnam eveniet reprehenderit ea!'}
          </span>
          <br />

          <div className='dropdown-button'>
            <p onClick={handleDescriptionToggle}>
              {isDescriptionExpanded ? 'Ver menos' : 'Ver más'}
            </p>
          </div>
        </div>

        <div className='recomendation'>
          {similarProducts.length >= 1 ? (
            <>
              <h3>Mas de esta serie</h3>
              <div className='book-recomendation'>
                {similarProducts.map((product, index) => (
                  <div className='book' key={index}>
                    <Link className='link_' to={`/product/${product.id}`} onClick={scrollToTop}>
                      <div>
                        <img src={product.thumbnail} alt='' width='150px' height='150px' />
                      </div>
                      <div className='title-autor'>
                        <h4>{product.title}</h4>
                        <h6>Autor</h6>
                      </div>
                    </Link>
                    <div className='type-price'>
                      <p>Tipo de libro</p>
                      <p>${product.price}</p>
                    </div>
                    <div className='product_cart' onClick={() => handleAddToCart(product.id)}>
                      <img src={elipse} alt=' ' className='elipse_product' />
                      <img src={cart_} alt=' ' className='cart_product' />
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <h3>Por el momento no hay productos similares</h3>
          )}
        </div>
      </div>
    </div>
  );
}
export default ProductDetail;
