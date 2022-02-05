import React from 'react';
import {AiOutlineShoppingCart} from "react-icons/ai";
import { Link } from "react-router-dom";


function MenuBar({ cartNum, isHome, isShop, inCart }) {
    return (
      <div className={isHome === 1 ? "menu-bar" : "menu-else"}>
        <Link to="/" className="link-img-auto">
          <img
            src="https://pngpress.com/wp-content/uploads/2020/09/uploads_mercedes_mercedes_PNG80135.png"
            className={isHome === 1 ? "img-auto" : "img-auto-else"}
          />
        </Link>
        {isHome === 1 ? <br /> : <></>}
  
        <Link to="/" className={isHome === 1 ? "txt-auto" : "txt-auto-else"}>
          Auto Centar Marinković
        </Link>
        <div
          className={
            isHome === 1 ? "menu-bar-items-div" : "menu-bar-items-div-else"
          }
        >
          <Link
            to="/shop"
            className="menu-bar-items"
            style={inCart===1 || isShop===1 ? { marginLeft:940} : { }}
          >
            Shop
          </Link>
        </div>
        {isShop === 1 ? (
          <Link to="/cart" className="cart-items">
            <AiOutlineShoppingCart className="icon-cart" />
            <p className="cart-num">{cartNum}</p>
          </Link>
        ) : (
          <></>
        )}
      </div>
    );
  }
  
  export default MenuBar;
