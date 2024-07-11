import axios from "axios";

export const getProducts = async() => {
   try {
    const res = await axios.get("https://api.escuelajs.co/api/v1/products");
    return res.data;
    
   } catch (error) {
    console.log(error);
   }
}
export const getSearchProducts = async(query) => {
   try{
      const res = await axios.get(`https://api.escuelajs.co/api/v1/products/?title=${query}`);
      console.log(res);
      return res.data;
   }
   catch(error){
    console.log(error);
   }
}