import { useMemo } from "react";
 
import { useSelector, useDispatch } from "react-redux";

import "./Header.css";
import { loginUser, logoutUser } from "../redux/user/actions";
import { selectProductsCount } from "../redux/cart/cart.selectors";

const Header = ({ openCart }) => {

  const { currentUser } = useSelector(rootReducer => rootReducer.userReducer);
  const { products } = useSelector((rooteReducer) => rooteReducer.cartReducer);

  const productsCount = useSelector(selectProductsCount);


  const dispatch = useDispatch();


  const handleLogin = () => {
    dispatch(loginUser({ name: "Rafa" }))
  }

  const handleLogout = () => {

    dispatch(logoutUser())
  }

  return (
    <div className="header">
      <h1>Light Commerce</h1>
      <nav>
        <a href="">page 1</a>
        <a href="">page 2</a>
      </nav>


      <div className="profile">
        { currentUser ? (
          <>
            <p>{ `Olá, ${currentUser.name}` }</p>
            <button className="login-button" onClick={ handleLogout }>Sair</button>
          </>
        ) : (
          <button className="login-button" onClick={ handleLogin }>Login </button>
        ) }

          <button className="cart" onClick={ () => openCart() }>{ productsCount }</button>
      </div>
      
    </div>
  )
}

export default Header