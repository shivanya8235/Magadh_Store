import React, { useState } from "react";
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
const EditProfileForm = () => {
  const [editprofiledata, setEditProfileData] = useState({
    name: "",
    email: "",
    contact: "",
  });
  const handleOnChange = (e) => {
    // console.log(e.target.value, e.target.name);
    setEditProfileData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };
  console.log(editprofiledata);
  return (
    <div>
      <form>
        <FormControl isRequired>
          <FormLabel>Enter Your Name</FormLabel>
          <Input
            type="text"
            placeholder="Name"
            onChange={handleOnChange}
            value={editprofiledata.name}
            name="name"
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Enter Your Email</FormLabel>
          <Input
            type="email"
            placeholder="abc@gmail.com"
            onChange={handleOnChange}
            value={editprofiledata.email}
            name="email"
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Enter Your Contact No</FormLabel>
          <Input
            type="tel"
            placeholder="Contact No."
            onChange={handleOnChange}
            value={editprofiledata.contact}
            name="contact"
          />
        </FormControl>

        <div className="py-4">
          <Button colorScheme="blue">Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default EditProfileForm;
