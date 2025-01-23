import React from "react";
import { InspirationsStyle } from "./styles";
// import inspirationbedroom from "../../..//assets/images/inspirationbedroom.png";
// import vector1 from "../../..//assets/icons/vector1.svg";
// import inspirationdiningroom from "../../..//assets/images/inspirationdiningroom.png";
// import inspirationcrop from "../../..//assets/images/inspirationcrop.png";
import { useNavigate } from "react-router-dom";
import HomeCarousel from "../../../atoms/Carousel/HomeCarousel";

const Inspirations = () => {
  const navigate = useNavigate();
  return (
    <InspirationsStyle>
      <section className="inspirations">
        <div className="inspirations__body">
          <div className="inspirations__title">
            <h1 className="inspirations__title-h1">
              50+ Beautiful rooms inspiration
            </h1>
            <p className="inspirations__title-p">
              Our designer already made a lot of beautiful prototipe of rooms
              that inspire you
            </p>
            <button
              className="inspirations__title-button"
              onClick={() => {
                window.scrollTo(0, 0);
                navigate("/shop"); // Переход на страницу "shop"
              }}
            >
              Explore More
            </button>
          </div>
          {/* <div className="inspirations__slider">
            <div className="inspirations__slider-cart">
              <img
                className="inspirations__slider-cart-img-1"
                src={inspirationbedroom}
                alt=""
              />
              <div className="inspirations__slider-cart-title">
                <div className="inspirations__slider-cart-title-1">
                  <p className="inspirations__slider-cart-title-1-p">01</p>
                  <img
                    className="inspirations__slider-cart-title-1-img"
                    src={vector1}
                    alt=""
                  />
                  <p className="inspirations__slider-cart-title-1-p">
                    Bed Room
                  </p>
                </div>
                <div className="inspirations__slider-cart-title-2">
                  <h1
                    className="inspirations__slider-cart-title-2-h1"
                    onClick={() => {
                      navigate("/shop"); // Переход на страницу "shop"
                    }}
                  >
                    Inner Peace
                  </h1>
                </div>
              </div>
              <button className="inspirations__slider-cart-button">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 12H3M21 12L15 6M21 12L15 18"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="inspirations__slider-cart">
              <img
                className="inspirations__slider-cart-img-2"
                src={inspirationdiningroom}
                alt=""
              />
            </div>
            <div className="inspirations__slider-cart">
              <img
                className="inspirations__slider-cart-img-3"
                src={inspirationcrop}
                alt=""
              />
            </div>
            <div className="inspirations__slider-radio">
              <button className="inspirations__slider-radio-buttons"></button>
              <button className="inspirations__slider-radio-buttons"></button>
              <button className="inspirations__slider-radio-buttons"></button>
              <button className="inspirations__slider-radio-buttons"></button>
            </div>
            <div className="inspirations__slider-button"></div>
          </div> */}
          <HomeCarousel />
        </div>
      </section>
    </InspirationsStyle>
  );
};

export default Inspirations;
