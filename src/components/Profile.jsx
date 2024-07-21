import React, { useState } from "react";
import { Avatar } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { logout } from "../store/userSlice";

const ProfileDropdownMenu = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    localStorage.removeItem("user");
    dispatch(logout());
    toast.success("Logout Successfully");
  };
  return (
    <div className="absolute -bottom-[200%] bg-white shadow-md rounded-md w-36">
      <div className="flex flex-col p-2 text-black gap-1">
        <p className="text-lg font-semibold border-b-2 text-center">Welcome</p>
        <button className="py-1 bg-green-500 text-sm text-white rounded-md ">
          Profile
        </button>
        <button
          onClick={logoutHandler}
          className="py-1 bg-red-500 text-sm text-white rounded-md "
        >
          Logout
        </button>
      </div>
    </div>
  );
};
const Profile = () => {
  const { user } = useSelector((state) => state.user);
  const [showDropdown, setshowDropdown] = useState(false);
  return (
    <div
      className="flex flex-col justify-center items-center font-semibold relative"
      onMouseEnter={() => setshowDropdown(true)}
      onMouseLeave={() => setshowDropdown(false)}
    >
      {/* <CircleUserRound size={30} /> */}
      <Avatar
        size={"sm"}
        name={user?.username}
        src="https://bit.ly/tioluwani-kolawole"
      />
      <p>Profile</p>
      {showDropdown && user && <ProfileDropdownMenu />}
    </div>
  );
};

export default Profile;
