import React from 'react';
import {AiOutlineShoppingCart} from "react-icons/ai";
import { Link } from "react-router-dom";


function MenuBar({cartNum}) {
    // const cartNum=0;
  return <div className="menuBar">
      <Link to='/'>My Store</Link>
      <Link to='/cart' className='cart-items'>
          <AiOutlineShoppingCart />
          <p className='cart-num'> {cartNum}</p>
      </Link>
  </div>;
}

export default MenuBar;
