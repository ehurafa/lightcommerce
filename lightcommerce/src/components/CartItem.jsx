import { useDispatch } from "react-redux";

import "./CartItem.css";
import { removeProductFromCart } from "../redux/cart/actions";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {  
    dispatch(removeProductFromCart(item.id))
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
            <button className="btn">+</button>
            <p>{ item.quantity }</p>
            <button className="btn">-</button>
            <button className="close" onClick={ () => handleRemove()}>x</button>
          </div>
        </div>        
    </div>
    </div>
  )
}

export default CartItem