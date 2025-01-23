import React, { useState } from "react";
import { PriceModal, PriceModalBackdrop, PriceModalButton, PriceModalContainer, PriceModalFooter } from "./styles";

const PriceFilterModal = ({ isOpen, onClose, onPriceChange }) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  const handleApply = () => {
    onPriceChange(minPrice, maxPrice);
    onClose();
  };
  const handleContainerClick = (e) => {
    console.log("propagation");
    e.stopPropagation();
  };
  // const handleBackdropClick = () => {
  //   console.log("backdrop");
  //   onClose();
  // };

  if (!isOpen) return null;

  return (

    <PriceModal onClick={handleContainerClick}>
      <PriceModalBackdrop onClick={onClose}>
      </PriceModalBackdrop>
      <PriceModalContainer >
        <h2>Filter by Price</h2>
        <label>
          Min Price:
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
          />
        </label>
        <label>
          Max Price:
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </label>
        <PriceModalFooter>
          <PriceModalButton onClick={handleApply}>Apply</PriceModalButton>
          <PriceModalButton onClick={onClose}>Close</PriceModalButton>
        </PriceModalFooter>
      </PriceModalContainer>
    </PriceModal>

  );
};

export default PriceFilterModal;
