import { useSelector, useDispatch } from "react-redux";

import "./Header.css";
import UserActionTypes from "../redux/user/action-types";

const Header = ({ cartItems, openCart }) => {

  const { currentUser } = useSelector(rootReducer => rootReducer.userReducer);
  const dispatch = useDispatch();

  console.log('currentUser ', currentUser)

  const handleLogin = () => {
    dispatch({
      type: UserActionTypes.LOGIN,
      payload: { name: "Rafa" }
    })
  }

  const handleLogout = () => {
    console.log('handleLogout')
    dispatch({
      type: UserActionTypes.LOGOUT
    })
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