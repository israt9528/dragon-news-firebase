import React from "react";

const DetailsCard = ({ el }) => {
  console.log(el);

  return (
    <div className="space-y-8 p-5 rounded mt-5 card border border-gray-200 shadow-sm">
      <img src={el.image_url} alt="" />
      <h2 className="font-bold text-xl">{el.title}</h2>
      <p className="font-medium text-accent">{el.details}</p>
      <button className="btn btn-secondary w-fit">
        All news in this category
      </button>
    </div>
  );
};

export default DetailsCard;
