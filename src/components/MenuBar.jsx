import React from 'react';
import {AiOutlineShoppingCart} from "react-icons/ai";

function MenuBar() {
  return <div className="menuBar">
      <a>My Store</a>
      <div className='cart-items'>
          <AiOutlineShoppingCart />
          <p className='cart-num'> 0 </p>
      </div>
  </div>;
}

export default MenuBar;
