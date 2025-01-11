import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import CartModal from "../pages/shop/CartModal";

const Navbar = () => {
  const products = useSelector((state) => state.cart.products);
  const [isCartOpen, setisCartOpen] =useState(false);
  const handleCartToggle = () => {
    setisCartOpen(!isCartOpen);
  }
  console.log(products);
  return (
    <header className="fixed-nav-bar w-nav">
      <nav className="max-w-screen-2xl mx-auto flex items-center justify-between px-4">
        <ul className="nav__links" style={{ paddingLeft: 200 }}>
          <li className="link">
            <Link to="/">Home</Link>
          </li>
          <li className="link">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="link">
            <Link to="/page">Pages</Link>
          </li>
          <li className="link">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="nav__logo" style={{ paddingLeft: 150 }}>
          <Link to="/">
            H&M<span>.</span>
          </Link>
        </div>
        <div className="nav__icons relative" style={{ paddingRight: 150 }}>
          <span>
            <Link to="/search">
              <i className="ri-search-line"></i>
            </Link>
          </span>
          <span>
            <button onClick={handleCartToggle} className="hover:text-primary">
              <i className="ri-shopping-bag-line"></i>
              <sup className="text-sm  inline-block px-1.5 text-white rounded-full bg-primary text-center ">
                {products.reduce(
                  (total, product) => total + product.quantity,
                  0
                )}
              </sup>
            </button>
          </span>
          <span>
            <Link to="/login">
              <i className="ri-user-line"></i>
            </Link>
          </span>
        </div>
      </nav>

      {isCartOpen && <CartModal products={products} isOpen={isCartOpen} onClose={handleCartToggle} />}
    </header>
  );
};

export default Navbar;
