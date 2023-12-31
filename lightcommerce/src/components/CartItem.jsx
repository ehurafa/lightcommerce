import { useDispatch } from "react-redux";

import "./CartItem.css";
import { removeProductFromCart, moreProductFromCart, minusProductFromCart } from "../redux/cart/actions";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {  
    dispatch(removeProductFromCart(item.id))
  }

  const handleMore = () => {  
    dispatch(moreProductFromCart(item.id))
  }

  const handleMinus = () => {  
    dispatch(minusProductFromCart(item.id))
  }


  return (
    <div className="cart-item">
    <div className="line">
        <h5>{ item.name }</h5>
    </div>
    <div className="line">
    <h3>{ item.price }</h3>
    </div>
    <div className="line">
        <div className="column">
          
          <div className="buttons">
            <button className="btn" onClick={ () => handleMore() }>+</button>
            <p>{ item.quantity }</p>
            <button className="btn" onClick={ () => handleMinus() }>-</button>
            <button className="close" onClick={ () => handleRemove()}>x</button>
          </div>
        </div>        
    </div>
    </div>
  )
}

export default CartItem