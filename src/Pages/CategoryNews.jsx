import React, { useEffect, useState } from "react";
import { GrReturn } from "react-icons/gr";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../Components/NewsCard/NewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [category, setCategory] = useState([]);

  useEffect(() => {
    if (id == 0) {
      setCategory(data);
      return;
    } else if (id == 1) {
      const filteredNews = data.filter(
        (news) => news.others.is_today_pick == true
      );
      setCategory(filteredNews);
      return;
    } else {
      const filteredNews = data.filter((news) => news.category_id == id);
      setCategory(filteredNews);
      return;
    }
  }, [data, id]);

  return (
    <div>
      <h2 className="text-xl font-medium">Dragon News Home</h2>
      <div className="grid grid-cols-1 mt-5 gap-5">
        {category.map((news) => (
          <NewsCard key={news.id} news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
