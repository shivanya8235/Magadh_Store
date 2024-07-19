import axios from "axios";
import toast from "react-hot-toast";

const BASE_URL = "https://movies-api-sage-sigma.vercel.app";
export const SignService = async (userSignupData) => {
  const toastId = toast.loading("Loading...");
  try {
    const { data, status } = await axios.post(
      `${BASE_URL}/api/v1/auth/signup`,
      userSignupData
    );
    if (status == 201) {
      toast.dismiss(toastId);
      toast.success("Signup Successfully");
      return data;
    }
  } catch (error) {
    console.log(error);
    toast.dismiss(toastId);
    toast.error(error.message);
  }
};
export const LoginService = async (userLoginData) => {
  const toastId = toast.loading("Loading...");
  try {
    const { data, status } = await axios.post(
      `${BASE_URL}/api/v1/auth/login`,
      userLoginData
    );
    if (status == 200) {
      toast.dismiss(toastId);
      toast.success("Login Successfully");
      return data;
    }
  } catch (error) {
    console.log(error);
    toast.dismiss(toastId);
    toast.error(error.message);
  }
};
export const getProducts = async () => {
  try {
    const res = await axios.get("https://api.escuelajs.co/api/v1/products");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const getSearchProducts = async (query) => {
  try {
    const res = await axios.get(
      `https://api.escuelajs.co/api/v1/products/?title=${query}`
    );
    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
