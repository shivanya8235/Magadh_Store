import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import wishlistReducer from "./WishListSlice";
import productsReducer from "./productSlice";
import userReducer from "./userSlice";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
    products: productsReducer,
    user: userReducer,
  },
});
