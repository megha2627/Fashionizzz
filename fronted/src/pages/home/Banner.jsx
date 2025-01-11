import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "../../assets/header.png";
//import bannerImg from '../../assets/header.png';

const Banner = () => {
  return (
    <div
      className="section__container header__container"
      style={{ width: "75%" }}
    >
      <div className="header__content z-30">
        <h4 className="uppercase">UP TO 40% DISCOUNT On</h4>
        <h1>Girl's Fashion</h1>
        <p>
          "Discover the latest trends in girls' fashion with our exclusive
          collection designed for every style and occasion".
        </p>
        <button className="btn">
          <Link to="/shop">EXPLORE NOW</Link>
        </button>
      </div>
      <div className="header__image">
        <img src={bannerImg} alt="Image"  />
      </div>
    </div>
  );
};

export default Banner;
