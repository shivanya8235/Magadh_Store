import React from "react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="p-4 relative h-[60vh]">
      <img
        src="https://www.potsandpans.in/cdn/shop/articles/Dry_fruits.jpg?v=1661501962"
        alt=""
        className="w-full h-full object-cover rounded-lg"
      />
      <Link to={"/Products"}>
        <Button
          className="!absolute bottom-[12%] left-[12%] w-40 rounded-full "
          backgroundColor={"#fb8500"} color={"white"} fontSize={"larger"} fontWeight={"bold"}
        >
          Explore
        </Button>
      </Link>
    </div>
  );
};

export default Banner;
