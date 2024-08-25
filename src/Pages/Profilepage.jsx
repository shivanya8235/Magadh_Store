import React, { useState } from "react";
import ProfilepageSidebar from "../components/ProfilepageSidebar";
import ProfilepageMain from "../components/ProfilepageMain";
import ProfileDetails from "../components/ProfileDetails/ProfileDetails";
import Order from "../components/OrderDetails/Order";
import Address from "../components/AddressDetails/Address";

const Profilepage = () => {
  const [currTab, setCurrTab] = useState(0);
  const handlecurrTab = (value) => {
    setCurrTab(value);
  };
  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="border border-red-500 flex flex-row h-dvh">
        <div className=" border border-r-2 w-1/4">
          <ProfilepageSidebar currTab={currTab} handlecurrTab={handlecurrTab} />
        </div>

        <div className="w-3/4">
          {currTab === 0 && <ProfileDetails />}
          {currTab === 1 && <Order />}
          {currTab === 2 && <Address />}
          {/* <ProfilepageMain /> */}
        </div>
      </div>
    </div>
  );
};

export default Profilepage;
