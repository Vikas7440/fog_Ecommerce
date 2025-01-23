import React, { useEffect, useState } from "react";
import { OurProductsStyle } from "./styles";
import Card from "../../../atoms/Card";
import axios from "axios";

const OurProducts = ({ name }) => {
  const [data, setData] = useState({ products: [] });

  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/v1/product/product-list/${1}`
      );
      setData(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <OurProductsStyle>
      <section className="product">
        <h1 className="product__title">{name}</h1>
        <div className="product__cards">
          {data?.products?.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
        <div className="product__button">
          <button
            className="product__button-btn"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <a href="./shop">Show More</a>
          </button>
        </div>
      </section>
    </OurProductsStyle>
  );
};

export default OurProducts;
