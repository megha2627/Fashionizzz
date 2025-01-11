import React from "react";
import dealsImg from "../../assets/deals.png";

const DealSection = () => {
  return (
    <section
      className="section__container deals__container"
      style={{
        width: "80%",
      }}
    >
      <div className="deals__image">
        <img src={dealsImg} alt="" style={{width:"80%"}}></img>
      </div>
          <div className="deals__content">
              <h5>Get upto 20% off</h5>
        <h4>Deals of The Day</h4>
        <p>
          Welcome to the ultimate destination for women’s fashion online! We
          bring you a curated collection of stylish and timeless outfits
          designed to celebrate your unique personality
        </p>
        <div className="deals__countdown flex-wrap">
          <div className="deals__countdown__card">
            <h4>14</h4>
            <p>Days</p>
          </div>

          <div className="deals__countdown__card">
            <h4>20</h4>
            <p>Hours</p>
          </div>

          <div className="deals__countdown__card">
            <h4>15</h4>
            <p>Mins</p>
          </div>

          <div className="deals__countdown__card">
            <h4>05</h4>
            <p>Sec</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealSection;
