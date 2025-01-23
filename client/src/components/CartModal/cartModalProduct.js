import React from "react";

const CartModalProduct = ({ product }) => {
  return (
    <div className="cartModal__body-products-product">
      <img
        className="cartModal__body-products-product-image"
        src={product.img}
        alt={product.name}
      />
      <div className="cartModal__body-products-product-text">
        <h1 className="cartModal__body-products-product-text-heading">
          {product.name}
        </h1>
        <div className="cartModal__body-products-product-text-pricetag">
          <h1 className="cartModal__body-products-product-text-pricetag-count">
            1
          </h1>
          <h1 className="cartModal__body-products-product-text-pricetag-x">
            x
          </h1>
          <h1 className="cartModal__body-products-product-text-pricetag-price">
            ${product.price}
          </h1>
        </div>
      </div>
      <div className="cartModal__body-products-product-box">
        <button className="cartModal__body-products-product-box-button"></button>
      </div>
    </div>
  );
};

export default CartModalProduct;
