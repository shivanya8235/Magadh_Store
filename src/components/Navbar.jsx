import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { ShoppingCart } from "lucide-react";
import { CircleUserRound } from "lucide-react";
import { Heart } from "lucide-react";

const Navbar = () => {
  return (
    <header>
      <div className="navbar p-4 h-20">
        <div className="text-2xl font-bold">
          <h2>Magadh Store</h2>
        </div>
        <div className="w-1/2">
          <InputGroup size={"lg"}>
            <InputLeftElement pointerEvents="none">
              <SearchIcon boxSize={"1.5em"} className="!text-gray-400" />
            </InputLeftElement>
            <Input
              variant="filled"
              backgroundColor={"white"}
              className="!bg-white !text-gray-500"
              colorScheme="whiteAlpha"
              type="text"
              placeholder="Search.."
            />
          </InputGroup>
        </div>
        <div className="flex gap-4">
          <Link to="">
            <div className="flex flex-col justify-center items-center font-semibold">
              <CircleUserRound size={30} />
              <p>Profile</p>
            </div>
          </Link>
          <Link to="/cart">
            <div className="flex flex-col justify-center items-center font-semibold">
              <ShoppingCart size={30} />
              <p>Cart</p>
            </div>
          </Link>
          <Link to="/wishlists">
            <div className="flex flex-col justify-center items-center font-semibold">
              <Heart size={30} />
              <p>Wishlist</p>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
