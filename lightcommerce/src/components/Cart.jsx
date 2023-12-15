import React from 'react';

import "./Cart.css";

const Cart = ({ closeCart }) => {
  return (
    <div className="cart">
      <div className="shadow" onClick={ () => closeCart() }></div>
      <div className="inner">
        <h4>Seu carrinho</h4>
      </div>
    </div>
  )
}

export default Cart