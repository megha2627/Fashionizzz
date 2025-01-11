import React from "react";
import instaImg1 from "../assets/instagram-1.jpg";
import instaImg2 from "../assets/instagram-2.jpg";
import instaImg3 from "../assets/instagram-3.jpg";
import instaImg4 from "../assets/instagram-4.jpg";
import instaImg5 from "../assets/instagram-5.jpg";
import instaImg6 from "../assets/instagram-6.jpg";

const Footer = () => {
  return (
    <>
      <footer
        className="section__container footer__container"
        style={{ width: "80%" }}
      >
        <div className="footer__col">
          <h4>CONTACT INFO</h4>
          <p>
            <span>
              <i className="ri-map-pin-2-fill"></i>
            </span>
            123, London Bridge Street, London
          </p>
          <p>
            <span>
              <i className="ri-mail-fill"></i>
            </span>
            support@lebaba.com
          </p>
          <p>
            <span>
              <i className="ri-phone-fill"></i>
            </span>
            (+012) 3456 789
          </p>
        </div>
        <div className="footer__col">
          <h4>COMPANY</h4>
          <a href="/">Home</a>
          <a href="/">About us</a>
          <a href="/">Work with us</a>
          <a href="/">Our blogs</a>
          <a href="/">Terms and conditions</a>
        </div>
        <div className="footer__col">
          <h4>LINKS..</h4>
          <a href="/">Help</a>
          <a href="/">Track my order</a>
          <a href="/">Men</a>
          <a href="/">Women</a>
          <a href="/">Dresses</a>
        </div>
        <div className="footer__col">
          <h4>INSTAGRAM</h4>
          <div className="instagram__grid">
            <img src={instaImg1} alt="instagram" />
            <img src={instaImg2} alt="instagram" />
            <img src={instaImg3} alt="instagram" />
            <img src={instaImg4} alt="instagram" />
            <img src={instaImg5} alt="instagram" />
            <img src={instaImg6} alt="instagram" />
          </div>
        </div>
      </footer>
      <div
        className="footer__bar"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        © 2025 Web design Agency. All rights reserved.
      </div>
    </>
  );
};

export default Footer;
