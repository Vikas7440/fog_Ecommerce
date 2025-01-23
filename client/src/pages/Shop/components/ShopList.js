import React, { useEffect, useState } from "react";
import { OurShopStyle } from "./styles";
import Card from "../../../atoms/Card";
import Pagination from "../../../components/Pagination";

const ShopList = ({ products, pageState, activePage, flexState }) => {
  const [selected, setSelected] = useState([]);
  const [pageNumber, setPageNumber] = useState(activePage);

  const handlePageNumber = (page) => {
    setPageNumber(page);
    setSelected(products.slice((page - 1) * pageState, pageState * page));
  };

  useEffect(() => {
    handlePageNumber(activePage);
  }, [pageState, products]);

  return (
    <OurShopStyle>
      <section className="shop">
        <div className={flexState}>
          {selected.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>

        <Pagination
          items={products}
          perPage={pageState}
          setPageNumber={handlePageNumber}
          activePage={pageNumber}
        />
      </section>
    </OurShopStyle>
  );
};

export default ShopList;
