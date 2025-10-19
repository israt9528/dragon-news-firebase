import React from "react";
import { FaStar, FaRegBookmark, FaShareAlt, FaEye } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
    id,
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,
    tags,
  } = news;

  // Format date nicely
  const formattedDate = new Date(author.published_date).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <div className="card border border-gray-200 shadow-sm hover:shadow-md transition duration-300 rounded-lg overflow-hidden bg-white">
      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-base-200">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full border"
          />
          <div>
            <h2 className="font-semibold text-gray-800">{author.name}</h2>
            <p className="text-sm text-gray-500">{formattedDate}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-gray-500">
          <button className="hover:text-primary">
            <FaRegBookmark size={18} />
          </button>
          <button className="hover:text-primary">
            <FaShareAlt size={18} />
          </button>
        </div>
      </div>

      {/* Title */}
      <div className="p-4 pb-0">
        <h3 className="font-bold text-lg text-gray-800 leading-snug">
          {title}
        </h3>
      </div>

      {/* Image */}
      <figure className="px-4 pt-3">
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full rounded-md object-cover"
        />
      </figure>

      {/* Description */}
      <div className="p-4 text-gray-600 text-sm">
        <p>
          {details.slice(0, 200)}...
          <Link
            to={`/newsDetails/${id}`}
            className="text-blue-600 font-semibold cursor-pointer"
          >
            {" "}
            Read More
          </Link>
        </p>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 py-3 border-t text-gray-700">
        {/* Rating */}
        <div className="flex items-center gap-1 text-orange-400">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              size={14}
              className={
                i < rating.number ? "fill-orange-400" : "fill-gray-300"
              }
            />
          ))}
          <span className="ml-1 text-gray-700 font-medium">
            {rating.number.toFixed(1)}
          </span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-2 text-gray-500">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
