import React from 'react';
import {AiOutlinePlus,AiOutlineMinus} from "react-icons/ai";

function SingleProduct() {
    const stil = {margin: 10, borderStyle: "dashed"};
  return (
  <div className="card" style={stil}>
      <img 
        className="card-img-top"
        src="https:/picsum.photos/200"
        alt="Neka slika" 
      />
      <div className="card-body">
          <h3 className="card-title">Product name</h3>
          <p className="card-text">This is description.</p>
      </div>
      <button className="btn"><AiOutlinePlus /></button>
      <button className="btn"><AiOutlineMinus/></button>

  </div>
  )
}

export default SingleProduct;
