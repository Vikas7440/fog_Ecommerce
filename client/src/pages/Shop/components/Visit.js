import React from "react";
import { VisitStyle } from "./styles";

const Visit = () => {
  return (
    <VisitStyle>
      <section className="visit">
        <div className="visit-box">
          <div className="visit__box-content">
            <h1 className="visit__box-content-h5">Shop</h1>
          </div>
          <div className="visit__box-links">
            <h3 className="visit__box-links-tohome">
              <a href="/">Home</a>
            </h3>
            <i className="visit__box-links-icon"></i>
            <h3 className="visit__box-links-toshop">
              <a href="/shop">Shop</a>
            </h3>
          </div>
        </div>
      </section>
    </VisitStyle>
  );
};

export default Visit;
