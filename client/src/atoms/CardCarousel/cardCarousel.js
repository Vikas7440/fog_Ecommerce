import React from "react";
import { CardCarouselStyle } from "./styles";
import getImagePath from "../../utils/getImgPath";
import { useNavigate } from "react-router-dom";
import getIconsPath from "../../utils/getIconsPath"


const CardCarousel = ({ product }) => {
  const navigate = useNavigate();

  return (
    <CardCarouselStyle>
      {/* <div className="card">
        <div className="card__header">
          <div className="card__hovered">
            <button className="card__hovered-btn" onClick={handleAddToCart}>
              {isAdded ? "Added!" : "Add to cart"}
            </button>
            <div className="card__hovered-icons">
              <a className="card__hovered-shareIcon" href="#">
                <img src={share} alt="Share" />
                <h4>Share</h4>
              </a>
              <a className="card__hovered-compare" href="#">
                <img src={compare} alt="Compare" />
                <h4>Compare</h4>
              </a>
              <a className="card__hovered-like" href="#">
                <img src={heart} alt="Like" />
                <h4>Like</h4>
              </a>
            </div>
          </div>
          <img
            className="card__img"
            src={getImagePath(product.img)}
            alt={product.name}
          />
        </div>

        <div className="card__main" onClick={handleCardSelect}>
          <h1 className="card__main-title">{product.name}</h1>
          <p className="card__main-name">{product.paragraph}</p>
          <div className="card__prices">
            <p className="card__price-now">${product.price}</p>
          </div>
        </div>
      </div> */}
      <div className="card__carousel">
        <img
          className="card__carousel-img-1"
          src={getImagePath("inspirationbedroom.png")}
          alt=""
        />
        <div className="card__carousel-title">
          <div className="card__carousel-title-1">
            <p className="card__carousel-title-1-p">01</p>
            <img
              className="card__carousel-title-1-img"
              src={getIconsPath("vecto1.svg")}
              alt=""
            />
            <p className="card__carousel-title-1-p">
              Bed Room
            </p>
          </div>
          <div className="card__carousel-title-2">
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
        <button className="card__carousel-button">
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
    </CardCarouselStyle>
  );
};

export default CardCarousel;
