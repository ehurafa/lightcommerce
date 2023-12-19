import "./CartItem.css";

const CartItem = ({ item }) => {
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
            <button className="close">x</button>
          </div>
        </div>        
    </div>
    </div>
  )
}

export default CartItem