
import { useDispatch } from "react-redux";

import "./Product.css";
import { addProductToCart } from '../redux/cart/actions';

const Product = ({ product, photo }) => {

  const dispatch = useDispatch();  

  const handleAddProduct = () => {
    dispatch(addProductToCart(product));
  }

    return (
    <div className="product">
        <img src={ photo  } />
        <p>{ product.name }</p>
        <p>{ `R$ ${product.price},00` }</p>
        <button onClick={ () => handleAddProduct() }>Comprar</button>
    </div>
  )
}

export default Product