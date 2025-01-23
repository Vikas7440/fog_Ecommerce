import React, { useState } from "react";
import { CardStyle } from "./styles";
import share from "../../assets/icons/gridicons_share.svg";
import compare from "../../assets/icons/compare-svgrepo-com 1.svg";
import heart from "../../assets/icons/heart.svg";
import getImagePath from "../../utils/getImgPath";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";

const Card = ({ product }) => {
  const dispatch = useDispatch();
  const [isAdded, setIsAdded] = useState(false);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    try {
      dispatch(addToCart(product));
      setIsAdded(true);
      setTimeout(() => setIsAdded(false), 2000);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const handleCardSelect = (e) => {
    try {
      navigate(`/product/${product.name}`, { state: { product } });
    } catch (error) {
      console.error("No card select", error);
    }
  };

  return (
    <CardStyle>
      <div className="card">
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
            src={getImagePath("image1.png")}
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
      </div>
    </CardStyle>
  );
};

export default Card;
