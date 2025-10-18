import React, { use } from "react";
import { NavLink } from "react-router";

const categoriesPromise = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
  const categories = use(categoriesPromise);
  return (
    <div>
      <h1 className="font-medium text-xl">
        All Categories ({categories.length})
        <div className="grid grid-cols-1 gap-2 mt-5">
          {categories.map((category) => (
            <NavLink
              to={`/category/${category.id}`}
              key={category.id}
              className="pl-8 text-accent hover:bg-base-300 p-3 text-lg rounded"
            >
              {category.name}
            </NavLink>
          ))}
        </div>
      </h1>
    </div>
  );
};

export default Categories;
