import React from "react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
const AddressCard = (props) => {
  const { name, phone, city, state, street, landmark } = props;
  return (
    <div className="border border-slate-500 rounded-md p-4 shadow-lg">
      <div className="font-semibold">
        <h3>{name}</h3>
        <p>Phone Number - {phone}</p>
      </div>
      <div className="">
        <p>{street}</p>
        <p>{landmark}</p>
        <p>
          {city},{state}
        </p>
      </div>
      <div className="flex gap-4 mt-2">
        <IconButton
          size={"sm"}
          className="!bg-[#38b000] !text-white"
          icon={<EditIcon />}
        />
        <IconButton
          size={"sm"}
          className="!bg-red-500 !text-white"
          icon={<DeleteIcon />}
        />
      </div>
    </div>
  );
};

export default AddressCard;
