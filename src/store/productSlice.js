import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
const initialState = { products: [], searchvalue: "", isLoading: false };

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProducts(state, action) {
      state.products = action.payload;
    },
    setSearchValue(state, action) {
      state.searchvalue = action.payload;
    },
    toggleLoading(state, action){
      state.isLoading = !state.isLoading;
    },
  },
});

export const { addProducts, setSearchValue, toggleLoading } = productSlice.actions;
export default productSlice.reducer;
