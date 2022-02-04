import React from 'react';
import SingleProduct from './SingleProduct';

const Cart = ({ products }) => {
  return (
  <div className='cart-container'>

    {/* <h3>This is your cart!</h3> */}

    {products.map((prod)=>(
    <SingleProduct
    product={prod} 
    key={prod.id}
    inCart={0}
    />
    ))}
    </div>
  )
}

export default Cart;
