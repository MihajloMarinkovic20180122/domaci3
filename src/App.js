import logo from './logo.svg';
import './App.css';
import MenuBar from './components/MenuBar';
import Shop from './components/Shop';
import Cart from './components/Cart';
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const [cartNum, setCartNum] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "BMW 320d",
      url: "https://freepngimg.com/thumb/car/1-2-car-png-picture.png",
      price: 18000.00,
      amount: 0,
    },
    {
      id: 2,
      title: "Mercedes ML",
      url: "https://img.cppng.com/download/2020-06/4-2-car-png-hd.png",
      price: 55000.00,
      amount: 0,
    },
    {
      id: 3,
      title: "Mercedes E220",
      url: "https://i.pinimg.com/originals/4b/d6/db/4bd6db7c593e9c693f2ae88d7d87f124.png",
      price: 22000.00,
      amount: 0,
    },
  ]);

  function refreshCart() {
    let newProducts = products.filter((prod) => prod.amount > 0);
    setCartProducts(newProducts);
  }
  function addProduct(title, id) {
    setCartNum(cartNum + 1);
    products.forEach((prod) => {
      if (prod.id === id) {
        prod.amount++;
      }
    });
    refreshCart();
  }
  function removeProduct(title, id) {
    products.forEach((prod) => {
      if (prod.id === id) {
        if (prod.amount > 0) {
          prod.amount--;
          setCartNum(cartNum - 1);
        }
      }
    });
    refreshCart();
  }

  return (
    <BrowserRouter className="App">
      <Routes>
        <Route
          path="/shop"
          element={
            <>
              <MenuBar cartNum={cartNum} isHome={0} isShop={1} inCart={0} />,
              <Shop
                products={products}
                onAdd={addProduct}
                onRemove={removeProduct}
              />
            </>
          }
        />
        <Route path="/" element={<MenuBar cartNum={cartNum} isHome={1} />} />
        <Route
          path="/cart"
          element={
            <>
              <MenuBar cartNum={cartNum} isHome={0} inCart={1} isShop={0}/>,
              <Cart products={cartProducts} onRemove={removeProduct} />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
