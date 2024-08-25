import { Avatar, Button } from "@chakra-ui/react";
import React from "react";
import ModalComp from "../Modal";
import EditProfileForm from "./EditProfileForm";
import { useState } from "react";

const ProfileDetails = () => {
  const [openEditProfileModal, setOpenEditProfileModal] = useState(false);
  const handleEditBtn = () => {
    setOpenEditProfileModal(!openEditProfileModal);
  };
  return (
    <div>
      <div className="w-3/5 mx-auto p-4">
        <div className="flex flex-row gap-8 ">
          <Avatar />
          <div className="text-lg font-medium text-gray-700">
            <p>Shivanya</p>
            <p>kshivanya82@gmail.com</p>
            <p>8235268868</p>
          </div>
        </div>
        <div className="my-4">
          <Button onClick={handleEditBtn} colorScheme="teal" size="sm">
            Edit Profile
          </Button>
          <ModalComp
            isOpen={openEditProfileModal}
            onClose={handleEditBtn}
            heading={"Edit Profile"}
          >
            <EditProfileForm />
          </ModalComp>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
