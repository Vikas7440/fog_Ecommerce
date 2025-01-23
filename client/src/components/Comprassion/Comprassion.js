import React from "react";
import { PageWrapper, ProductContainer, ProductCard } from "./styles";
import getImagePath from "../../utils/getImgPath";

const Compare = ({ product1, product2 }) => {
  if (!product1 || !product2) {
    return <p>Select two products to compare</p>;
  }

  return (
    <PageWrapper>
      <h3>Compared Products:</h3>
      <ProductContainer>
        <ProductCard>
          <img src={getImagePath(product1.img)} alt={product1.name} />
          <div className="container">
            <h5>{product1.name}</h5>
            <p className="container-price">Price: ${product1.price}</p>
            <p className="container-desc">Description: {product1.paragraph}</p>
          </div>
        </ProductCard>
        <ProductCard>
          <img src={getImagePath(product2.img)} alt={product2.name} />
          <div className="container">
            <h5>{product2.name}</h5>
            <p className="container-price">Price: ${product2.price}</p>
            <p className="container-desc">Description: {product2.paragraph}</p>
          </div>
        </ProductCard>
      </ProductContainer>
    </PageWrapper>
  );
};

export default Compare;
