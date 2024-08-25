import React from "react";

const OrderDetails = (props) => {
  const { textkey, value } = props;
  return (
    <div className="flex gap-2">
      <span className="font-semibold">{textkey} </span>
      <span>{value}</span>
    </div>
  );
};

export default OrderDetails;
