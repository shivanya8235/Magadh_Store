import React from "react";
import PasswordInput from "./Password";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import { LoginService } from "../Services/Index";
import { useDispatch } from "react-redux";
import { setUser } from "../store/userSlice";

const LoginForm = ({ setOpenSignUP, handleOpen }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const isDisabled = email === "" && password === "";
  const loginHandler = async () => {
    const userLoginData = {
      email: email,
      password: password,
    };
    const data = await LoginService(userLoginData);
    if (data) {
      handleOpen();
      const user = { token: data.token, user: data.user };
      dispatch(setUser(user));
      localStorage.setItem("user", JSON.stringify(user));
    }
  };
  return (
    <div className="flex flex-col gap-4">
      <FormControl>
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
      <div>
        <Button
          className="w-full"
          background={"#fb8500"}
          textColor={"white"}
          isDisabled={isDisabled}
          onClick={loginHandler}
        >
          Login
        </Button>
        <button
          onClick={() => setOpenSignUP(true)}
          className="text-lg w- w-full font-medium justify-center items-center p-2 flex flex-row"
        >
          Register
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
