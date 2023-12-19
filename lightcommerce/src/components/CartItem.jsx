import "./CartItem.css";

const CartItem = ({ item }) => {
  return (
    <div>
        <figure>
            <img src={ item.url } alt={ item.description } />
        </figure>
        <h4>{ item.description }</h4>
        <h5>{ item.price }</h5>
    </div>
  )
}

export default CartItem