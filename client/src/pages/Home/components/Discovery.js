import React from "react";
import { DiscoveryStyle } from "./styles";
import { useNavigate } from "react-router-dom";

const Discovery = () => {
  const navigate = useNavigate();
  return (
    <DiscoveryStyle>
      <section className="discover">
        <div className="discover__content">
          <div className="discover__content-text">
            <h5 className="discover__content-titleMeta">New Arrival</h5>
            <h1 className="discover__content-title">
              Discover Our <br />
              New Collection
            </h1>
            <p className="discover__content-p">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laudantium, molestias..
            </p>
            <button
              className="discover__content-button"
              onClick={() => {
                navigate("/shop"); // Переход на страницу "shop"
              }}
            >
              Buy now
            </button>
          </div>
        </div>
      </section>
    </DiscoveryStyle>
  );
};

export default Discovery;
