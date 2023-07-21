import './Cart.css';

function Cart({ close }) {
  return (
    <div className='cartPage'>
      <div className='cartContainer'>
        <p className='closeCart' onClick={close}>
          X
        </p>
        <h2>Carrito de compras</h2>
        <div className='cartItem'>
          <img src='' alt='imagen' />
          <p>
            <span>Descargable 1</span>
            <span>$5400</span>
          </p>
          <div className='deleteItem'>
            <button>
              <img src='' alt='Borrar' />
            </button>
          </div>
        </div>
        <div className='cartItem'>
          <img src='' alt='imagen' />
          <p>
            <span>Descargable 2</span>
            <span>$2500</span>
          </p>
          <div className='deleteItem'>
            <button>
              <img src='' alt='Borrar' />
            </button>
          </div>
        </div>
        <p className='total'>
          <span>Total</span>
          <span>$7900</span>
        </p>
        <button>Iniciar compra</button>
      </div>
    </div>
  );
}

export default Cart;
