import { useState, useEffect } from "react";

import "./ProductList.css";

import axios from "axios";

import Product from "./Product";

const ProductList = ({ list }) => {

  const [photo, setPhoto] = useState('');

  const getPhoto = async() => {
    const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY;

    const response = await axios.get(`https://api.unsplash.com/search/photos/`, {
      params: {
        client_id: apiKey,
        count: 1,
        query: 'rocket',
      }
    });

    const list = [...response.data.results];

    setPhoto(list[0].urls.thumb);    
  };

  useEffect(() => {
    getPhoto();
  }, []);
  

  return (
    <div className="product-list">
      { list && list.map((product) => (
        <Product key={ product.id } product={ product } photo={ photo }/>
      ))}
    </div>
  )
}

export default ProductList