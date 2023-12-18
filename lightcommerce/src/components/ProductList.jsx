import { useEffect } from "react";

import "./ProductList.css";

import Product from "./Product";

const ProductList = ({ list }) => {
  

  return (
    <div className="product-list">
      { list && list.map((product) => (
        <Product key={ product.id } product={ product } />
      ))}
    </div>
  )
}

export default ProductList