import React from 'react';
import {AiOutlinePlus,AiOutlineMinus} from "react-icons/ai";

function SingleProduct({product, onAdd, onRemove}) {
    const stil = {margin: 10, borderStyle: "dashed"};

    // function onAdd(title, id){
    //     console.log("Dodat je "+ title + " sa id="+ id);
    // }
    // function onRemove(title, id){
    //     console.log("Obrisan je "+ title + " sa id="+ id);
    // }
  return (
  <div className="card" style={stil}>
      <img 
        className="card-img-top"
        src="https:/picsum.photos/200"
        alt="Neka slika" 
      />
      <div className="card-body">
          <h3 className="card-title">{product.title}</h3>
          <p className="card-text">{product.description}</p>
      </div>
      {/* <button className="btn" onClick={()=> onAdd(product.title, product.id)}><AiOutlinePlus /></button> */}
      <button className="btn" onClick={()=>onAdd(product.title, product.id)}><AiOutlinePlus /></button>

      {/* <button className="btn" onClick={()=> onRemove(product.title, product.id)}><AiOutlineMinus/></button> */}
      <button className="btn" onClick={()=>onRemove(product.title, product.id)}><AiOutlineMinus/></button>


  </div>
  )
}

export default SingleProduct;
