import { useEffect } from "react";

import "./ProductList.css";

import Product from "./Product";

const ProductList = ({ list, addCart }) => {
  

  return (
    <div className="product-list">
      { list && list.map((product) => (
        <Product key={ product.id } product={ product } addCart={ addCart }/>
      ))}
    </div>
  )
}

export default ProductList