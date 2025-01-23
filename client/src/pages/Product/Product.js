import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { ProductStyle } from "./styles";
import getImagePath from "../../utils/getImgPath";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import { FaStar, FaStarHalf } from "react-icons/fa";
import OurProducts from "../Home/components/OurProducts";

const Product = () => {
  const [qty, setQty] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null); // State to track button colors
  const location = useLocation();
  const product = location.state?.product;
  const dispatch = useDispatch();

  if (!product) {
    return <p>Product not found.</p>;
  }

  const toggleBtn = (size) => {
    setSelectedSize((prevSize) => (prevSize === size ? null : size));
  };

  const decrease = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  const increase = () => {
    setQty(qty + 1);
  };
  const handleAddToCart = () => {
    try {
      dispatch(addToCart(product));
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };
  return (
    <ProductStyle>
      <div className="product__details">
        <div>
          <img
            className="product__img"
            src={getImagePath("image1.png")}
            alt={product.name}
          />
        </div>
        <div className="product__description">
          <div className="description-top">
            <h1 className="product__name">{product.name}</h1>
            <div className="grey_">
              <FaStar color="yellow" />
              <FaStar color="yellow" />
              <FaStar color="yellow" />
              <FaStar color="yellow" />
              <FaStarHalf color="yellow" />| 4 Customer Review
            </div>
            <p className="grey_ product__price ">{product.price}$</p>
          </div>
          <p className="product__paragraph">{product.description}</p>
          <br></br>
          <div>
            <div className="grey_">SIZE</div>
            <button
              className="size_btn"
              onClick={() => toggleBtn("L")}
              style={{
                backgroundColor: selectedSize === "L" ? "#b88e2f" : "#f9f1e7",
              }}
            >
              L
            </button>
            <button
              className="size_btn"
              onClick={() => toggleBtn("XL")}
              style={{
                backgroundColor: selectedSize === "XL" ? "#b88e2f" : "#f9f1e7",
              }}
            >
              XL
            </button>
            <button
              className="size_btn"
              onClick={() => toggleBtn("XS")}
              style={{
                backgroundColor: selectedSize === "XS" ? "#b88e2f" : "#f9f1e7",
              }}
            >
              XS
            </button>
          </div>
          <div>
            <div className="grey_">Colour</div>
            <button className="blue_bg">L</button>
            <button className="black_bg">XL</button>
            <button className="brown_bg">XS</button>
          </div>
          <button className="qty" onClick={decrease}>
            -
          </button>
          {qty}
          <button className="qty" onClick={increase}>
            +
          </button>
          <button className="product__add-to-cart" onClick={handleAddToCart}>
            Add to cart
          </button>
          <button className="product__add-to-cart">+ Compare</button>
        </div>
      </div>
      <OurProducts name={"Related Products"} />
    </ProductStyle>
  );
};

export default Product;
