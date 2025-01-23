import React from "react";
import { Browsetherangestyle } from "./styles";
import img106 from "../../../assets/images/image106.png";
import img100 from "../../../assets/images/image100.png";
import img101 from "../../../assets/images/image101.png";
import { useNavigate } from "react-router-dom";

const Browsetherange = () => {
  const navigate = useNavigate();
  return (
    <Browsetherangestyle>
      <section className="browsetherange">
        <div className="browsetherange__header">
          <h1 className="browsetherange__header-h1">Browse The Range</h1>
          <p className="browsetherange__header-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="browsetherange__carts">
          <div className="browsetherange__cart">
            <img className="browsetherange__cart-img" src={img106} alt="" />
            <h1
              onClick={() => {
                navigate("/shop"); // Переход на страницу "shop"
              }}
            >
              Dining
            </h1>
          </div>
          <div className="browsetherange__cart">
            <img className="browsetherange__cart-img" src={img100} alt="" />
            <h1
              onClick={() => {
                navigate("/shop"); // Переход на страницу "shop"
              }}
            >
              Living
            </h1>
          </div>
          <div className="browsetherange__cart">
            <img className="browsetherange__cart-img" src={img101} alt="" />
            <h1
              onClick={() => {
                navigate("/shop"); // Переход на страницу "shop"
              }}
            >
              Bedroom
            </h1>
          </div>
        </div>
      </section>
    </Browsetherangestyle>
  );
};

export default Browsetherange;
