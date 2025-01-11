import React from 'react'

const promoBanner = () => {
  return (
    <section className="section__container banner__container">
      <div className="banner__card">
        <span>
          <i className="ri-truck-line"></i>
        </span>
        <h4>Fast & Free Delivery</h4>
        <p>
          Get your favorite products
          delivered straight to your doorstep at no extra cost
        </p>
      </div>
      <div className="banner__card">
        <span>
          <i className="ri-money-dollar-circle-line"></i>
        </span>
        <h4>24/7 Money-Back Support</h4>
        <p>
          Shop with confidence knowing that our 24/7 support team is here to
          assist you. 
        </p>
      </div>
      <div className="banner__card">
        <span>
          <i className="ri-user-voice-fill"></i>
        </span>
        <h4>Dedicated Customer Support</h4>
        <p>
          Our team is always here to help! Whether you have questions about your
          order.
        </p>
      </div>
    </section>
  );
}

export default promoBanner
