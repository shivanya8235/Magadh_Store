import React from "react";

const OrderProductCard = (props) => {
  return (
    <div className="flex flex-row gap-4">
      <div>
        <img src={props.image} className="w-20 h-20 object-cover" />
      </div>
      <div className="flex flex-col justify-evenly">
        <p className="font-semibold">{props.productName}</p>
        <div className="flex flex-row">
          <p className=" pr-2 border-r">Quantity: {props.quantity}</p>
          <p className="pl-2">Price: &#8377;{props.price}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderProductCard;
