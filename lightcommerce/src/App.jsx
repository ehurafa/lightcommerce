import { useState, useEffect} from "react";

import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Cart from "./components/Cart";

import Products from "./data.json";

function App() {
  const [cart, setCart] = useState(false);

  const openCart = () => {
    setCart(true)
  }

  const closeCart = () => {
    setCart(false)
  }

  return (
    <>
      <div className="container">
        <Header openCart={ openCart } />
        { cart && <Cart closeCart={ closeCart } />}
        <ProductList list={ Products } />
        <Footer />
      </div>
    </>
  )
}

export default App
