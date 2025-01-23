import React from "react";
import { DiscoveryStyle } from "./styles/discoverystyle";

const Discovery = () => {
  return (
    <DiscoveryStyle>
      <section className="discover">
        <div className="discover__content">
          <div className="discover__content-text">
            <h5 className="discover__content-titleMeta">New Arrival</h5>
            <h1 className="discover__content-title">
              Discover Our <br />New Collection
            </h1>
            <p className="discover__content-p">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laudantium, molestias..
            </p>
            <button className="discover__content-button">Buy now</button>
          </div>
        </div>
      </section>
    </DiscoveryStyle>
  );
};

export default Discovery;
