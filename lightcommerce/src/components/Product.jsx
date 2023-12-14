import React, { useState, useEffect} from 'react';

const Product = ({ product, addCart }) => {

  let min = 10;
  let max = 50;
  let randomPrice = Math.floor(Math.random() * (max - min + 1)) + min;

    return (
    <div className="product">
        <img src={ product.urls.thumb  } />
        <p>{ product.description }</p>
        <p>{ `R$ ${product.price},00` }</p>
        <button onClick={ addCart(product) }>Comprar</button>
    </div>
  )
}

export default Product