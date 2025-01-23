import React, { useMemo, useEffect } from "react";


const Pagination = ({ items, perPage, setPageNumber, activePage }) => {
  const handlePageChange = (page) => {
    setPageNumber(page);
  };
  const pageNumbers = useMemo(() => {
    return Array.from(
      { length: Math.ceil(items.length / perPage) },
      (_, i) => i + 1
    );
  }, [items, perPage]);

  useEffect(() => {
    setPageNumber(activePage);
  }, [activePage]);

  return (
    <div id="myDIV" className="shop__nextButton">
      {activePage > 1 && (
        <button
          onClick={() => handlePageChange(activePage - 1)}
          className="shop__nextButton-btn"
        >
          prev
        </button>
      )}

      {pageNumbers.map((number) => (
        <button
          key={number}
          className={`shop__nextButton-btn ${
            number === activePage && "active"
          }`}
          onClick={() => handlePageChange(number)}
        >
          {number}
        </button>
      ))}

      {activePage < pageNumbers.length && (
        <button
          onClick={() => handlePageChange(activePage + 1)}
          className="shop__nextButton-btn"
        >
          next
        </button>
      )}
    </div>
  );
};

export default Pagination;
