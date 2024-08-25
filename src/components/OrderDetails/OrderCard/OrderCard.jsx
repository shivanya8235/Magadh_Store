import React from "react";
import OrderDetails from "./OrderDetails";
import OrderProductCard from "./OrderProductCard";
const OrderCard = () => {
  const products = [
    {
      _id: "1d8c5c2a-6e3b-4952-9c51-7fb15a62c24f",
      brand: "boat",
      type: "wired",
      addedInYear: 2021,
      alt: "boAt Bassheads 242",
      productName: "boAt Bassheads 242",
      image:
        "https://res.cloudinary.com/dlykup1dh/image/upload/v1684504768/TechGiz/product-1.jpg",
      description:
        "boAt Bassheads 242 in Ear Wired Earphones with Mic(Neon Green)",
      price: "1,800.00",
      oldPrice: "3000.00",
      inStock: true,
      discount: 18,
      rating: 3,
      quantity: 1,
    },
    {
      _id: "1d8c5c2a-6e3b-4952-9c51-7fb15a62c24f",
      brand: "boat",
      type: "wired",
      addedInYear: 2021,
      alt: "boAt Bassheads 242",
      productName: "boAt Bassheads 242",
      image:
        "https://res.cloudinary.com/dlykup1dh/image/upload/v1684504768/TechGiz/product-1.jpg",
      description:
        "boAt Bassheads 242 in Ear Wired Earphones with Mic(Neon Green)",
      price: "1,800.00",
      oldPrice: "3000.00",
      inStock: true,
      discount: 18,
      rating: 3,
      quantity: 1,
    },
    {
      _id: "1d8c5c2a-6e3b-4952-9c51-7fb15a62c24f",
      brand: "boat",
      type: "wired",
      addedInYear: 2021,
      alt: "boAt Bassheads 242",
      productName: "boAt Bassheads 242",
      image:
        "https://res.cloudinary.com/dlykup1dh/image/upload/v1684504768/TechGiz/product-1.jpg",
      description:
        "boAt Bassheads 242 in Ear Wired Earphones with Mic(Neon Green)",
      price: "1,800.00",
      oldPrice: "3000.00",
      inStock: true,
      discount: 18,
      rating: 3,
      quantity: 1,
    },
  ];
  return (
    <div className="border border-slate-500 p-4 rounded-md">
      <div>
        <div>
          <p className="font-semibold text-[#38b000]">Order Confirmed</p>
          <p>{new Date().toDateString()}</p>
          {/* Return current date */}
          <OrderDetails textkey={"Order Id:"} value={"abcde"} />
        </div>
        <div className="my-2">
          <OrderDetails textkey={"Payment Id:"} value={"abcde"} />
          <OrderDetails
            textkey={"Total amount:"}
            value={<span>&#8377;{123}</span>}
          />
          <div className="my-2">
            <OrderDetails
              textkey={"Delivery address:"}
              value={"Saguna more, danapur, patna, 801503"}
            />
          </div>
          <div className="flex flex-col gap-3">
            {products.map((ele, idx) => {
              return <OrderProductCard {...ele} key={idx} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
