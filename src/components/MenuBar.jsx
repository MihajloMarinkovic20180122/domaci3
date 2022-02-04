import React from 'react';
import {AiOutlineShoppingCart} from "react-icons/ai";

function MenuBar({cartNum}) {
    // const cartNum=0;
  return <div className="menuBar">
      <a>My Store</a>
      <div className='cart-items'>
          <AiOutlineShoppingCart />
          <p className='cart-num'> {cartNum}</p>
      </div>
  </div>;
}

export default MenuBar;
