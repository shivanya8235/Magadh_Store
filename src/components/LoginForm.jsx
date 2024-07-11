import React from "react";
import PasswordInput from "./Password";
import { useState } from "react";
import { ChevronRight } from 'lucide-react';
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
} from "@chakra-ui/react";
import axios from "axios";

const LoginForm = ({setOpenSignUP}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isDisabled = email === "" && password === "";
  const login = async () => {
    console.log(email, password)
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
          onClick={login}
        >
          Login
        </Button>
        <button onClick={()=>setOpenSignUP(true)} className="text-lg w- w-full font-medium justify-center items-center p-2 flex flex-row">Register<ChevronRight/></button> 
      </div>
    </div>
  );
};

export default LoginForm;
