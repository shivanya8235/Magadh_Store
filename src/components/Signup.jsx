import React from "react";
import { FormControl, Input, Button } from "@chakra-ui/react";
import PasswordInput from "./Password";
import { useState } from "react";
import toast from "react-hot-toast";
import { SignService } from "../Services/Index";
import { useDispatch } from "react-redux";
import { setUser } from "../store/userSlice";

const Signup = ({ setOpenSignUP }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [confirmpassword, setConfirmPassword] = useState("");
  const isDisabled =
    name === "" && email === "" && password === "" && confirmpassword === "";
  const signUpHandler = async () => {
    const isPasswordMatched = verifyConfirmPassword(password, confirmpassword);
    if (isPasswordMatched) {
      const userData = {
        username: name,
        password: password,
        email: email,
      };
      const data = await SignService(userData);
      if (data) {
        setOpenSignUP(false);
        dispatch(setUser(data));
      }
    }
  };
  const verifyConfirmPassword = (password, confirmPassword) => {
    if (password !== confirmPassword) {
      toast.error("Password and Confirm Password are not same.");
      return false;
    }
    if (password.length < 6 && confirmPassword.length < 6) {
      toast.error(
        "Password and Confirm Password must have atleast six characters."
      );
      return false;
    }
    return true;
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
        value={confirmpassword}
        placeholder="Confirm password"
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <div>
        <Button
          className="w-full"
          background={"#fb8500"}
          textColor={"white"}
          isDisabled={isDisabled}
          onClick={signUpHandler}
        >
          Signup
        </Button>
      </div>
    </div>
  );
};

export default Signup;
