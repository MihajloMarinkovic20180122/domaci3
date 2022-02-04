import logo from './logo.svg';
import './App.css';
import MenuBar from './components/MenuBar';
import Shop from './components/Shop';
import Cart from './components/Cart';
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
 
  const[cartNum, setCartNum]= useState(0);
  const[cartProducts, setCartProducts]= useState([]);
  const[products]= useState([
    {
      id: 1,
      title: "Audi A7",
      description:
        "Cena: 70.000e",
      amount: 0,
    },
    {
      id: 2,
      title: "BMW X3",
      description:
        "Cena: 30.000e",
      amount: 0,
    },
    {
      id: 3,
      title: "Mercedes S600",
      description:
        "Cena: 110.000e",
      amount: 0,
    },
  ]);

  function refreshCart(){
    let newProducts= products.filter((prod)=>prod.amount>0);
    setCartProducts(newProducts);
  }

  function addProduct(title, id){
    // console.log("Dodat je proizvod "+title+" koji ima id "+id);
    setCartNum(cartNum + 1);
    products.forEach((prod)=>{
      if(prod.id === id) {
        prod.amount++;
      }
    });
    refreshCart();
  }
  function removeProduct(title, id){
    // console.log("Obrisan je proizvod "+title+" koji ima id "+id);
    setCartNum(cartNum - 1);
    products.forEach((prod)=>{
      if(prod.id === id) {
        prod.amount--;
      }
    });
    refreshCart();
  }


  return (
    <BrowserRouter className="App">
      <MenuBar cartNum={cartNum}></MenuBar>
      <Routes>
        <Route path='/' element={<Shop products={products} onAdd={addProduct} onRemove={removeProduct}/>}
      />
      <Route path='/cart' element={<Cart products={cartProducts}/>}
      />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
