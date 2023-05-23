import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header>
      <div className="container row justify-content-between align-items-center">
        <div className="logo">
          <img src="Image/logo.png" alt="" />
        </div>
        <nav>
          <div className="navLinks">
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/ContactUs">ContactUs</Link>
            <Link to="/Service">Service</Link>
            <Link to="/Products">Products</Link>
            <Link to="/Login">Login</Link>
            <Link to="/AddToCart">
              <i className="fa-solid fa-cart-shopping">
                <div className="cart-items-no"></div>
              </i>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
