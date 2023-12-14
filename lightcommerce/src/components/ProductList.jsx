import "./ProductList.css";

import Product from "./Product";

const ProductList = ({ list, addCart }) => {
  console.log('list ', list)
  return (
    <div className="product-list">
      { list && list.map((product) => (
        <Product key={ product.id } product={ product } addCart={ addCart }/>
      ))}
    </div>
  )
}

export default ProductList