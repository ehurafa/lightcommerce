import "./Header.css";

const Header = ({ cartItems }) => {
  return (
    <div className="header">
      <h1>Light Commerce</h1>
      <nav>
        <a href="">page 1</a>
        <a href="">page 2</a>
      </nav>


      <div className="profile">
        <a href="">Login</a>
          <button className="cart">{cartItems}</button>
      </div>
      
    </div>
  )
}

export default Header