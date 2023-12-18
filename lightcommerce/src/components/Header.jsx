import { useSelector, useDispatch } from "react-redux";

import "./Header.css";
import { loginUser, logoutUser } from "../redux/user/actions";

const Header = ({ cartItems, openCart }) => {

  const { currentUser } = useSelector(rootReducer => rootReducer.userReducer);
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

          <button className="cart" onClick={ () => openCart() }>{cartItems}</button>
      </div>
      
    </div>
  )
}

export default Header