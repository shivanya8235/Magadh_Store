import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
const initialState = { cart: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const product = { ...action.payload, qty: 1 };
      state.cart.push(product);
    },
    removeFromCartById(state, action) {
      state.cart = state.cart.filter(
        (product, index) => product.id != action.payload
      );
    },
    incProductQty(state, action) {
      state.cart = state.cart.map((product, index) => {
        if (product.id === action.payload) {
          return { ...product, qty: product.qty + 1 };
        }
        return product;
      });
    },
    decProductQty(state, action) {
      state.cart = state.cart.map((product, index) => {
        if (product.id === action.payload) {
          if (product.qty > 1) {
            return { ...product, qty: product.qty - 1 };
          }
        }
        return product;
      });
    },
  },
});

export const { addToCart, removeFromCartById, incProductQty, decProductQty } =
  cartSlice.actions;
export default cartSlice.reducer;
