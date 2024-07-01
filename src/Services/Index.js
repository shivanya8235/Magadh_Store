import axios from "axios";

export const getProducts = async() => {
   try {
    const res = await axios.get("https://api.escuelajs.co/api/v1/products");
    console.log(res);
    return res.data;
    
   } catch (error) {
    console.log(error);
   }
}