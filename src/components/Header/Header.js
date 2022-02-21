import React, { useState } from "react";
import "./Header.scss";
import cart from "../../static/images/cart.svg";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="main-container">
      {isOpen && <Cart item={null} close={() => setIsOpen(false)} />}
      <div className="header-left-container">
        <img
          src={require("../../static/images/logo.png")}
          alt=""
          className="header-image"
        />
        <div className="menu-text-container">
          <Link to="/homepage" style={{ marginRight: "20%" }}>
            Home
          </Link>
          <Link to="/product"> Products</Link>
        </div>
      </div>
      <div style={{ width: "20%" }}>
        <div className="signin-text-container">
          <Link style={{ marginRight: "2%" }} to="/signin">
            SignIn
          </Link>
          <Link to="/signup"> Register</Link>
        </div>
        <div className="cart-container" onClick={() => setIsOpen(true)}>
          <img src={cart} alt="" style={{ width: "20px", height: "20px" }} />
          <div>{props.item ? "1 items" : "0 items"} </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
