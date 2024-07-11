import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
const initialState = { wishlist: [] };

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist(state, action) {
      state.wishlist.push(action.payload);
    },
    removeFromWishlistById(state, action) {
      state.wishlist = state.wishlist.filter(
        (product, index) => product.id != action.payload
      );
    
    },
  },
});

export const { addToWishlist, removeFromWishlistById } = wishlistSlice.actions;
export default wishlistSlice.reducer;