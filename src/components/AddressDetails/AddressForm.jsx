import React from "react";
import { useState } from "react";
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
const AddressForm = () => {
  const [addressFormData, setAddressFormData] = useState({
    name: "",
    contact: "",
    street: "",
    landmark: "",
    city: "",
    district: "",
    pincode: "",
    state: "",
    country: "",
  });
  const handleOnChange = (e) => {
    // console.log(e.target.value, e.target.name);
    setAddressFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  console.log(addressFormData);
  return (
    <div>
      <form>
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold">Contact Details</h3>
          <FormControl>
            <Input
              type="text"
              placeholder="Name"
              onChange={handleOnChange}
              value={addressFormData.name}
              name="name"
            />
          </FormControl>
          <FormControl>
            <Input
              type="tel"
              placeholder="Contact"
              onChange={handleOnChange}
              value={addressFormData.contact}
              name="contact"
            />
          </FormControl>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold">Address</h3>
          <FormControl>
            <Input
              type="text"
              placeholder="street(Area, Road, House No.)
            "
              onChange={handleOnChange}
              value={addressFormData.street}
              name="street"
            />
          </FormControl>
          <FormControl>
            <Input
              type="text"
              placeholder="Landmark"
              onChange={handleOnChange}
              value={addressFormData.landmark}
              name="landmark"
            />
          </FormControl>
          <FormControl>
            <Input
              type="text"
              placeholder="city"
              onChange={handleOnChange}
              value={addressFormData.city}
              name="city"
            />
          </FormControl>
          <div className="flex flex-row gap-2">
            <FormControl>
              <Input
                type="text"
                placeholder="district"
                onChange={handleOnChange}
                value={addressFormData.district}
                name="district"
              />
            </FormControl>
            <FormControl>
              <Input
                type="tel"
                placeholder="pincode"
                onChange={handleOnChange}
                value={addressFormData.pincode}
                name="pincode"
              />
            </FormControl>
          </div>
          <div className="flex flex-row gap-2">
            <FormControl>
              <Input
                type="text"
                placeholder="state"
                onChange={handleOnChange}
                value={addressFormData.state}
                name="state"
              />
            </FormControl>
            <FormControl>
              <Input
                type="text"
                placeholder="country"
                onChange={handleOnChange}
                value={addressFormData.country}
                name="country"
              />
            </FormControl>
          </div>
        </div>
        <div className="flex justify-between gap-2 mt-2">
          <Button
            variant="outline"
            className="!w-full !text-[#fb8500] !border !border-[#fb8500]"
          >
            Cancel
          </Button>
          <Button className="!w-full !bg-[#fb8500] !text-white">Save</Button>
        </div>
      </form>
    </div>
  );
};

export default AddressForm;
