import { useSelector } from 'react-redux';

import "./Cart.css";

import CartItem from "./CartItem";

const Cart = ({ closeCart }) => {
  const { products } = useSelector((rooteReducer) => rooteReducer.cartReducer);

  return (
    <div className="cart">
      <div className="shadow" onClick={ () => closeCart() }></div>
      <div className="inner">
        <h4>Seu carrinho</h4>

        { products && products.map((product) => (
          <div key={ product.id }>
            <CartItem item={ product } />
            <hr />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cart