// filepath: /C:/Users/Nitin Gupta/Desktop/EcommerceWebsite/fronted/src/components/Navigation.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <Link to="/category/accessories">Accessories</Link>
      <Link to="/category/jewellery">Jewellery</Link>
      <Link to="/category/cosmetics">Cosmetics</Link>
    </nav>
  );
};

export default Navigation;
