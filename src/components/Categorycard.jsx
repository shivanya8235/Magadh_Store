import React from "react";

const Categorycard = (props) => {
  console.log(props);
  return (
    <div className="border border-slate-800 rounded-lg max-w-xs max-h-[300px] overflow-hidden shadow-2xl p-2 bg-[#ffba08]">
      <div>
        <img
          src={props.Img}
          alt=""
          className="h-60 object-cover"
        />
      </div>
      <p className="font-bold text-2xl text-center p-2 text-white">
        {props.categoryName}
      </p>
    </div>
  );
};

export default Categorycard;
