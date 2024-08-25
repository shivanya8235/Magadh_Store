import React from "react";
import OrderCard from "./OrderCard/OrderCard";

const Order = () => {
  return (
    <div>
      <h2 className="font-bold text-lg p-4">My Orders</h2>
      <div className="p-4 mx-auto">
        <OrderCard />
      </div>
    </div>
  );
};

export default Order;
