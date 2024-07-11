import React from "react";
import { FormControl, Input, Button } from "@chakra-ui/react";
import PasswordInput from "./Password";
import { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConformPassword] = useState("");
  const isDisabled =
    name === "" && email === "" && password === "" && confirmpassword === "";
  const signup = async () => {
    console.log(email, password);
    try {
      const response = await axios.post(
        "https://api.escuelajs.co/api/v1/auth/login",
        { email: email, password: password }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col gap-4">
      <FormControl className="flex flex-col gap-4">
        <Input
          type="text"
          placeholder="Enter Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <PasswordInput
        value={password}
        placeholder="Enter password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <PasswordInput
        value={password}
        placeholder="Confirm password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <div>
        <Button
          className="w-full"
          background={"#fb8500"}
          textColor={"white"}
          isDisabled={isDisabled}
          onClick={signup}
        >
          Signup
        </Button>
      </div>
    </div>
  );
};

export default Signup;
