import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    perPage: 4,
    sortByCategory: "",
    flexDirection: "shop__cards-row",
    minPrice: 0,
    maxPrice: 1000,
  },
  reducers: {
    setPerPage: (state, action) => {
      // if (action.payload < 1) {
      //   return {
      //     ...state, perPage: 1
      //   }
      // }
      return {
        ...state,
        perPage: action.payload,
      }
    },
    setSortByCategory: (state, action) => {
      return {
        ...state,
        sortByCategory: action.payload,
      }
    },
    setDirection: (state, action) => {
      return {
        ...state,
        flexDirection: action.payload,
      };
    },
    setPriceFilter: (state, action) => {
      return {
        ...state,
        minPrice: action.payload.minPrice,
        maxPrice: action.payload.maxPrice,
      };
    },

  },
});

export const { setPerPage, setSortByCategory, setDirection, setPriceFilter } = filterSlice.actions;


export default filterSlice.reducer;
