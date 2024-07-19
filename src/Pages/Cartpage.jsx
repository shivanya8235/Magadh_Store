import React from "react";
import { useSelector } from "react-redux";
import Productcard from "../components/Productcard";
import HorizontalProductCard from "../components/HorizontalProductCard";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import CartProductsDetails from "../components/CartProductsDetails";

function Cartpage() {
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);
  return (
    <div className="min-h-dvh">
      {cart.length != 0 ? (
        <div className="grid grid-cols-2">
          <div>
            {cart.map((element, index) => {
              return <HorizontalProductCard {...element} key={index} />;
            })}
          </div>
          <div className="pt-28">
            <CartProductsDetails />
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-dvh">
          <img
            className="max-w-md object-cover "
            src="/public/meme.jpeg"
            alt=""
          />
          <h1 className="text-center p-4 text-2xl font-bold">Cart is Empty</h1>
          <Link to={"/Products"}>
            <Button
              variant="outline"
              textColor={"#fb8500"}
              borderColor={"#fb8500"}
            >
              Browse Products
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cartpage;
