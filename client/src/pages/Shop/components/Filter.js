import React, { useState, useEffect } from "react";
import { FilterStyle } from "./styles";
import data from "../../../data.json";
import PriceFilterModal from "./PriceFilterModal";

const Filter = ({
  perPageChange,
  pageState,
  setSortByCategory,
  sortByCategory,
  flexChanger,
  flexState,
  onPriceChange,
}) => {
  const [selectedSort, setSelectedSort] = useState(sortByCategory);
  const [perPage, setPerPage] = useState(pageState);
  const [flexDirection, setFlexDirection] = useState(flexState);
  const [isModalOpen, setIsModalOpen] = useState(false);


  const handlePerPageChanger = (e) => {
    if (e.target.value < 1) {
      setPerPage("1");
    }else{
    setPerPage(e.target.value);
    }
  };

  const handleflexDirection = (e) => {
    setFlexDirection(e);
  };

  const handleSelectChange = (e) => {
    setSelectedSort(e.target.value);
  };

  const openModal = () => {
    setIsModalOpen((prev) => !prev);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    setSortByCategory(selectedSort);
  }, [selectedSort]);

  useEffect(() => {
    perPageChange(perPage);
  }, [perPage]);

  useEffect(() => {
    flexChanger(flexDirection);
  }, [flexDirection]);

  return (
    <FilterStyle>
      <section className="filter">
        <div className="filter__buttons">
          <div className="filter__buttons-filtering">
            <a className="filter__buttons-filtering-a" onClick={openModal}></a>
            <h1 className="filter__buttons-filtering-h1">Filter</h1>
          </div>
          <div className="filter__buttons-listing">
            <button
              className="filter__buttons-listing-grid"
              onClick={() => handleflexDirection("shop__cards-row")}
            ></button>
            <button
              className="filter__buttons-listing-viewlist"
              onClick={() => handleflexDirection("shop__cards-column")}
            ></button>
          </div>
          <span className="filter__result-text">
            Showing {perPage} of {data.products.length} results
          </span>
        </div>
        <div className="filter__inputs">
          <span className="filter__inputs-show">Show</span>
          <input
            type="number"
            value={perPage}
            onChange={handlePerPageChanger}
            className="filter__inputs-show-count"
          />
          <span className="filter__inputs-short">Sort by</span>
          <select
            className="filter__inputs-select"
            id="options"
            value={selectedSort}
            onChange={handleSelectChange}
          >
            <option value="">Default</option>
            <option value="bedroom">Bedroom</option>
            <option value="kitchen">Kitchen</option>
            <option value="diningroom">Diningroom</option>
            <option value="bathroom">Bathroom</option>
          </select>
        </div>
      </section>

      {/* Модальное окно */}
      <PriceFilterModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onPriceChange={onPriceChange}
      />
    </FilterStyle>
  );
};

export default Filter;
