import React from "react";
import PasswordInput from "./Password";

import { FormControl, FormLabel,Input, FormHelperText} from "@chakra-ui/react";
const LoginForm = () => {
  return (
    <div>
      <FormControl>
        <FormLabel>Email address</FormLabel>
        <Input type="email" />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>
      <PasswordInput />
    </div>
  );
};

export default LoginForm;
