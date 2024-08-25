import { Avatar, Button } from "@chakra-ui/react";
import { ShoppingBag } from "lucide-react";
import { MapPin } from "lucide-react";
import { CircleUser } from "lucide-react";

import React from "react";
const Userprofile = () => {
  return (
    <div className="flex flex-row gap-3 py-1 px-2">
      <Avatar />
      <div>
        <p className="font-semibold">Name</p>
        <p className="font-semibold">contact</p>
      </div>
    </div>
  );
};
const ProfileSideBarTab = ({ currTab, handlecurrTab }) => {
  const tabs = [
    { icon: <CircleUser />, text: "Profile" },
    { icon: <ShoppingBag />, text: "Orders" },
    { icon: <MapPin />, text: "Address" },
  ];
  return (
    <div className="flex flex-col">
      {tabs.map((ele, idx) => (
        <button
          onClick={() => handlecurrTab(idx)}
          className={`flex gap-4 p-4 border-y border-slate-300 ${
            idx === currTab && "bg-slate-200"
          }`}
        >
          {ele.icon}
          {ele.text}
        </button>
      ))}
    </div>
  );
};
const ProfilepageSidebar = ({ currTab, handlecurrTab }) => {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <Userprofile />
        <ProfileSideBarTab currTab={currTab} handlecurrTab={handlecurrTab} />
      </div>
      <div></div>
    </div>
  );
};

export default ProfilepageSidebar;
