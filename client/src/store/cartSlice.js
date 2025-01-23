import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (existingProduct) {
        return {
          ...state,
          products: state.products.map((product) =>
            product.id === action.payload.id
              ? { ...product, count: product.count + 1 }
              : product
          ),
        };
      }
      return {
        ...state,
        products: [...state.products, { ...action.payload, count: 1 }],
      };
    },
    removeFromCart: (state, action) => {
      return {
        ...state,
        products: state.products.filter((product) => product.id !== action.payload.id)
      };
    },
    decrementCount: (state, action) => {
      console.log({ state, action });
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id
            ? { ...product, count: Math.max(product.count - 1, 0) }
            : product
        )
          .filter((product) => product.count > 0)
      };
    },
    clearCart: (state, action) => {
      return {
        ...state,
        products: []
      }
    }
  },
});

export const { addToCart } = cartSlice.actions;
export const { removeFromCart } = cartSlice.actions;
export const { decrementCount } = cartSlice.actions;
export const { clearCart } = cartSlice.actions;

export default cartSlice.reducer;
