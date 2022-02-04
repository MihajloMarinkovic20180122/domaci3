import React from 'react';
import {AiOutlinePlus,AiOutlineMinus} from "react-icons/ai";

function SingleProduct({product, onAdd, onRemove, inCart }) {
    const stil = {margin: 10, borderStyle: "dashed"};
  return (
  <div className={inCart===1 ? "card" : "card-cart"} style={stil}>
      <img 
        className={inCart===1 ? "card-img-top" : "cart-img-left"}
        src="https:/picsum.photos/200"
        alt="Neka slika" 
      />
      <div className="card-body">
          <h3 className="card-title">{product.title}</h3>
          <p className="card-text">{product.description}</p>
      </div>
      {inCart===1 ? <>
      <button className="btn" onClick={()=>onAdd(product.title, product.id)}>
        <AiOutlinePlus />
        </button>

      <button className="btn" onClick={()=>onRemove(product.title, product.id)}>
        <AiOutlineMinus/>
        </button>
        </>
        :<h3> Amount: {product.amount}</h3>}

  </div>
  )
}

export default SingleProduct;
