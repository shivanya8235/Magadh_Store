import React from "react";
import Productcard from "../components/Productcard";
import { data } from "../Temprorydata/data";
import { useState, useEffect } from "react";
import { getProducts } from "../Services/Index";
import Loader from "../components/Loader";
import { useSelector, useDispatch } from "react-redux";
import { addProducts, toggleLoading } from "../store/productSlice";

const Products = () => {
  const { products, isLoading } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const fetchData = async () => {
    dispatch(toggleLoading());
    const data = await getProducts();
    dispatch(addProducts(data));
    dispatch(toggleLoading());
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <div>
          {products.length == 0 && (
            <h1 className="text-xl font-semibold text-center">
              Products Not Found
            </h1>
          )}
        </div>
      )}
      <div className="grid-cols-3 grid min-h-dvh">
        {products.map((element, index) => {
          return <Productcard {...element} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Products;
