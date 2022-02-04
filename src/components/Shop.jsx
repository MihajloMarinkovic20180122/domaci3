import React from 'react';
import SingleProduct from './SingleProduct';

function Shop({products, onAdd, onRemove}) {
    // const name = "Naziv proizvoda";
    // const desc = "Opis proizvoda";
    // const prod={
    //     title:"Naziv",
    //     description:"Opis"
    // }


    
  return (
  <div className="all-products">
      {products.map((prod)=>(
          <SingleProduct 
            product={prod} 
            key={prod.id}
            onAdd={onAdd}
            onRemove={onRemove}
          />
      ))}
      {/* <SingleProduct product={products[0]}/>
      <SingleProduct product={products[1]}/>
      <SingleProduct product={products[2]}/> */}
  </div>
  )
}

export default Shop;
