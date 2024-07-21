import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { ShoppingCart } from "lucide-react";
import { CircleUserRound } from "lucide-react";
import { Heart } from "lucide-react";
import ModalComp from "./Modal";
import { useState } from "react";
import LoginForm from "./LoginForm";
import Signup from "./Signup";
import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";
import { useLocation } from "react-router-dom";
import { Avatar } from "@chakra-ui/react";
import Profile from "./Profile";

const Badge = ({ count, className }) => {
  return (
    <div
      className={`absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-orange-500 border-2 border-white rounded-full -top-2 -end-2 ${className}`}
    >
      {count}
    </div>
  );
};
const Navbar = () => {
  const cart = useSelector((state) => state.cart.cart);
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  const [open, setOpen] = useState(false);
  const [opensignup, setOpenSignUP] = useState(false);
  const { user } = useSelector((state) => state.user);
  const location = useLocation();
  const handleOpen = () => {
    if (!user) {
      setOpen(!open);
    }
  };
  return (
    <header className="sticky top-0 left-0 w-full z-10">
      <div className="navbar p-4 h-20 flex flex-row justify-between">
        <div className="text-2xl font-bold">
          <h2>Magadh Store</h2>
        </div>
        {location.pathname == "/Products" && <SearchBar />}
        <div className="flex gap-8">
          <Link to="" onClick={handleOpen}>
            <Profile />
          </Link>
          <ModalComp isOpen={open} onClose={handleOpen} heading={"Login"}>
            <LoginForm setOpenSignUP={setOpenSignUP} handleOpen={handleOpen} />
          </ModalComp>
          <ModalComp
            isOpen={opensignup}
            onClose={() => setOpenSignUP(false)}
            heading={"Signup"}
          >
            <Signup setOpenSignUP={setOpenSignUP} />
          </ModalComp>
          <Link to="/cart">
            <div className=" relative flex flex-col justify-center items-center font-semibold">
              <ShoppingCart size={30} />
              <Badge className={"-end-3"} count={cart.length} />
              <p>Cart</p>
            </div>
          </Link>
          <Link to="/wishlists">
            <div className=" relative flex flex-col justify-center items-center font-semibold">
              <Heart size={30} />
              <Badge className={"end-0"} count={wishlist.length} />
              <p>Wishlist</p>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
