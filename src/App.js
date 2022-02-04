import logo from './logo.svg';
import './App.css';
import MenuBar from './components/MenuBar';
import Shop from './components/Shop';
import { useState } from "react";

function App() {
 
  const[cartNum, setCartNum]= useState(0);


  
  const products = [
    {
      id: 1,
      title: "Audi A7",
      description:
        "Potrebno je posedovati vozacku dozvolu 10 god",
      amount: 0,
    },
    {
      id: 2,
      title: "BMW X3",
      description:
        "Potrebno je posedovati vozacku dozvolu 5 god",
      amount: 0,
    },
    {
      id: 3,
      title: "Mercedes Vito",
      description:
        "Potrebno je posedovati vozacku dozvolu 2 god",
      amount: 0,
    },
  ];

  function addProduct(title, id){
    console.log("Dodat je proizvod "+title+" koji ima id "+id);
    setCartNum(cartNum + 1);
    // console.log("Broj proizvoda u korpi: " + cartNum);
  }
  function removeProduct(title, id){
    console.log("Obrisan je proizvod "+title+" koji ima id "+id);
    setCartNum(cartNum - 1);
    // console.log("Broj proizvoda u korpi: " + cartNum);
  }

  return (
    <div className="App">
      <MenuBar cartNum={cartNum}></MenuBar>
      <Shop products={products} onAdd={addProduct} onRemove={removeProduct}/>
     
    </div>
  );
}

export default App;
