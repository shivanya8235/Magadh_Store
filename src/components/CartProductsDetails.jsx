import React from "react";
import { Button } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const CartProductsDetails = () => {
  const cart = useSelector((state) => state.cart.cart);
  const totalProductsInCart = cart.reduce((acc, curr) => {
    return (acc = acc + curr.qty);
  }, 0);
  const totalPrice = cart.reduce((acc, curr) => {
    return (acc = acc + curr.price * curr.qty);
  }, 0);
  const discount = 50;
  const deliveryCharges = totalPrice >= 500 ? 0 : 40;
  const totalAmount = totalPrice - discount + deliveryCharges;
  return (
    <div className="border border-gray-500 max-w-sm p-4 rounded-md shadow-md mx-auto">
      <div>
        <h4 className="text-lg font-semibold text-center py-4">
          Products details
        </h4>
      </div>
      <div className="flex flex-col gap-2 border-t border-b py-4">
        <div className="flex  flex-row items-center justify-between">
          <span>Price ({totalProductsInCart} Items)</span>
          <span>&#8377; {totalPrice}</span>
        </div>
        <div className="flex  flex-row items-center justify-between">
          <span>Price Discount</span>
          <span>&#8377; {discount}</span>
        </div>
        <div className="flex  flex-row items-center justify-between">
          <span>Delivery Charges</span>
          <span>
            {deliveryCharges ? <span>&#8377; {deliveryCharges}</span> : "Free"}
          </span>
        </div>
      </div>
      <div className="flex  flex-row items-center justify-between py-4 border-b text-md font-bold">
        <span>Total Amount</span>
        <span> &#8377; {totalAmount}</span>
      </div>
      <div className="py-4">
        <Button width={"100%"} backgroundColor={"#fb8500"} textColor={"white"}>
          Cheakout
        </Button>
      </div>
    </div>
  );
};

export default CartProductsDetails;
