import React from "react";
import Productcard from "../components/Productcard";
import { useSelector } from "react-redux";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Wishlists() {
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  return (
    <div>
      {wishlist.length ? (
        <div>
          {wishlist.map((element, index) => {
            return <Productcard {...element} key={index} />;
          })}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-dvh">
          <img
            className="max-w-md object-cover "
            src="/public/meme.jpeg"
            alt=""
          />
          <h1 className="text-center p-4 text-2xl font-bold">Your Wishlist is Empty</h1>
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

export default Wishlists;
