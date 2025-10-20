import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router";

const DetailsCard = ({ el }) => {
  console.log(el);
  const { category_id } = el;

  return (
    <div className="space-y-8 p-5 rounded mt-5 card border border-gray-200 shadow-sm">
      <img src={el.image_url} alt="" />
      <h2 className="font-bold text-xl">{el.title}</h2>
      <p className="font-medium text-accent">{el.details}</p>
      <Link to={`/category/${category_id}`} className="btn btn-secondary w-fit">
        <FaArrowLeft></FaArrowLeft> All news in this category
      </Link>
    </div>
  );
};

export default DetailsCard;
