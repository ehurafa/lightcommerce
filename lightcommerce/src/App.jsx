import { useState, useEffect} from "react";

import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Cart from "./components/Cart";

import axios from "axios";

function App() {

  const [products, setProducts] = useState([]);
  const [productDetail, setProductDetail] = useState(null);
  const [cart, setCart] = useState(0);

  const addCart = (product) => {
    
    let cartItems = cart;
    console.log('ok', cartItems ++)
    setCart(cartItems ++);
  }

  let min = 10;
  let max = 50;

  let randomPrice = (n) => {
  return Math.floor(Math.random() * (max - min + n)) + min;
  }

  const fetchData = async() => {

    const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY;

    const response = await axios.get(`https://api.unsplash.com/photos/random`, {
      params: {
        client_id: apiKey,
        count: 10,
        query: 'food',
      }
    });


    const list = [...response.data];

    list.map((product, i) => product.price = randomPrice(i))

    setProducts(list);    
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    
  }, [addCart]);

  return (
    <>
      <div className="container">
        <Header cartItems={ cart } />
        <Cart />
        <ProductList list={ products } addCart={ addCart } />
        <Footer />
      </div>
    </>
  )
}

export default App
