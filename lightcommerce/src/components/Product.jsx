import React, { useState, useEffect} from 'react';

import { useDispatch } from "react-redux";

import "./Product.css";
import { addProductToCart } from '../redux/cart/actions';

const Product = ({ product }) => {

  let min = 10;
  let max = 50;
  let randomPrice = Math.floor(Math.random() * (max - min + 1)) + min;

  const dispatch = useDispatch();

  const handleAddProduct = () => {
    dispatch(addProductToCart(product));
  }

    return (
    <div className="product">
        <img src={ product.urls.thumb  } />
        <p>{ product.description }</p>
        <p>{ `R$ ${product.price},00` }</p>
        <button onClick={ () => handleAddProduct() }>Comprar</button>
    </div>
  )
}

export default Product