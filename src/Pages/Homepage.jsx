import React from "react";
import Banner from "../components/Banner";
import Categorycard from "../components/Categorycard";

const Homepage = () => {
  return (
    <div className="p-4">
      <Banner />
      <div>
        <div>
          <h1 className="text-2xl font-bold text-center py-4">Categories</h1>
        </div>
        <div className="grid grid-cols-3 justify-items-center gap-x-2 gap-y-8">
        <Categorycard categoryName={"Fruits"} Img={"../../public/download (1).jpg"}/>
        <Categorycard categoryName={"Dryfruits"} Img={"../../public/dryfruit.jpg"}/>
        <Categorycard categoryName={"Art & Craft"} Img={"../../public/art.jpg"}/>
        <Categorycard categoryName={"Cultural Cloths"} Img={"../../public/silk.jpg"}/>
        <Categorycard categoryName={"Cuisines"} Img={"../../public/cuisines.jpg"}/>
        <Categorycard categoryName={"Carbs"} Img={"../../public/grains.jpg"}/>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
