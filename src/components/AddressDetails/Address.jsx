import React from "react";
import { useState } from "react";
import ModalComp from "../Modal";
import { Button, Modal } from "@chakra-ui/react";
import AddressForm from "./AddressForm";
import AddressCard from "./AddressCard";

const Address = () => {
  const AddressData = [
    {
      name: "John Doe",
      phone: "123-456-7890",
      city: "New York",
      state: "NY",
      street: "123 Main St",
      landmark: "Near Central Park",
    },
    {
      name: "Jane Smith",
      phone: "987-654-3210",
      city: "Los Angeles",
      state: "CA",
      street: "456 Elm St",
      landmark: "Opposite the City Mall",
    },
    {
      name: "Alice Johnson",
      phone: "555-555-5555",
      city: "Chicago",
      state: "IL",
      street: "789 Oak St",
      landmark: "Next to the river",
    },
  ];

  const [openAddressFormModel, setOpenAddressFormModel] = useState(false);
  const handleNewAddressBtn = () => {
    setOpenAddressFormModel(!openAddressFormModel);
  };
  return (
    <>
      <div className="border-b">
        <div className="flex flex-row justify-between items-center  w-3/4 mx-auto p-4">
          <h2 className="font-bold">Addresses</h2>
          <Button
            onClick={handleNewAddressBtn}
            className="!bg-[#fb8500] !text-white !text-sm"
          >
            Add New Address
          </Button>
          <ModalComp
            isOpen={openAddressFormModel}
            onClose={handleNewAddressBtn}
            heading={"Add New Address"}
          >
            <AddressForm />
          </ModalComp>
        </div>
      </div>
      <div className="w-3/4 mx-auto p-4 flex flex-col gap-2">
        {AddressData.map((address, idx) => {
          return <AddressCard {...address} key={idx} />;
        })}
      </div>
    </>
  );
};

export default Address;
