import React, { useEffect, useMemo, useReducer } from "react";
import Filter from "./components/Filter";
import ShopList from "./components/ShopList";
import Visit from "./components/Visit";
import data from "../../data.json";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  setPerPage,
  setSortByCategory,
  setDirection,
  setPriceFilter,
} from "../../store/filterSlice";

const shopActionTypes = {
  SET_PRODUCTS: "set_products",
};

const initialShopState = {
  products: [],
  page: 1,
};

const shopReducer = (state, action) => {
  switch (action.type) {
    case shopActionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: [...action.payload],
      };
    default:
      break;
  }
};

const Shop = () => {
  const filterDispatch = useDispatch();
  const filters = useSelector((state) => state.filters);
  const [state, dispatch] = useReducer(shopReducer, initialShopState);
  const location = useLocation();

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/product/product-list/${1}` // Update the API endpoint as needed
      );
      const products = response.data.products;
      dispatch({ type: shopActionTypes.SET_PRODUCTS, payload: products });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const perPage = searchParams.get("perPage");

    if (perPage) {
      filterDispatch(setPerPage(+perPage));
    }
  }, []);

  useEffect(() => {
    fetchProducts(); // Call the fetchProducts function
  }, []);

  // useEffect(() => {
  //   dispatch({ type: shopActionTypes.SET_PRODUCTS, payload: data.products });
  // }, [data]);

  const handlePerPage = (perPageFilter) => {
    filterDispatch(setPerPage(perPageFilter));
  };

  const handleSortCategory = (selectedSort) => {
    filterDispatch(setSortByCategory(selectedSort));
  };

  const handlePriceChange = (minPrice, maxPrice) => {
    filterDispatch(setPriceFilter({ minPrice, maxPrice }));
  };

  const filteredProducts = useMemo(() => {
    return state.products.filter(
      (product) =>
        (filters.sortByCategory === "" ||
          product.category === filters.sortByCategory) &&
        product.price >= filters.minPrice &&
        product.price <= filters.maxPrice
    );
  }, [
    state.products,
    filters.sortByCategory,
    filters.minPrice,
    filters.maxPrice,
  ]);

  const handleDirectionChanger = (selectedChanger) => {
    filterDispatch(setDirection(selectedChanger));
  };

  return (
    <>
      <Visit />
      <Filter
        perPageChange={handlePerPage}
        pageState={filters.perPage}
        setSortByCategory={handleSortCategory}
        sortByCategory={filters.sortByCategory}
        flexChanger={handleDirectionChanger}
        flexState={filters.flexDirection}
        onPriceChange={handlePriceChange}
      />
      <ShopList
        products={filteredProducts}
        pageState={filters.perPage}
        activePage={state.page}
        flexState={filters.flexDirection}
      />
    </>
  );
};

export default Shop;
